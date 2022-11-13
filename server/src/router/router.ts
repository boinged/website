import {ContentSDK} from 'api-sdk';
import {FastifyInstance} from 'fastify';

import {Health} from '../endpoint/health';
import {Message} from '../endpoint/message';
import {IBody} from '../model/iBody';

export class Router {
	contentSDK: ContentSDK;

	serviceIP: string;

	constructor(serviceIP: string, contentSDK: ContentSDK) {
		this.serviceIP = serviceIP;
		this.contentSDK = contentSDK;
	}

	async applyRoutes(server: FastifyInstance): Promise<void> {
		const message = new Message(this.serviceIP, this.contentSDK);
		server.get('/message', (request) => message.execute(request.body as IBody));

		const health = new Health();
		server.get('/healthy', (request) => health.execute(request.body as IBody));
	}
}
