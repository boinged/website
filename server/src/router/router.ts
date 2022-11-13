import {ContentSDK} from 'api-sdk';
import {FastifyInstance} from 'fastify';

import {HealthEndpoint} from '../endpoint/healthEndpoint';
import {MessageEndpoint} from '../endpoint/messageEndpoint';
import {IBody} from '../model/iBody';

export class Router {
	contentSDK: ContentSDK;

	serviceIP: string;

	constructor(serviceIP: string, contentSDK: ContentSDK) {
		this.serviceIP = serviceIP;
		this.contentSDK = contentSDK;
	}

	async applyRoutes(server: FastifyInstance): Promise<void> {
		const message = new MessageEndpoint(this.serviceIP, this.contentSDK);
		server.get('/message', (request) => message.execute(request.body as IBody));

		const health = new HealthEndpoint();
		server.get('/healthy', (request) => health.execute(request.body as IBody));
	}
}
