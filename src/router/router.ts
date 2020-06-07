import {ContentSDK} from 'api-sdk';
import {FastifyInstance} from 'fastify';

import {Health} from '../endpoint/health';
import {Message} from '../endpoint/message';

export class Router {
	contentSDK: ContentSDK;

	serviceIP: string;

	constructor(serviceIP: string, contentSDK: ContentSDK) {
		this.serviceIP = serviceIP;
		this.contentSDK = contentSDK;
	}

	async applyRoutes(server: FastifyInstance): Promise<void> {
		const health = new Health();
		server.get('/healthz', health.execute.bind(health));

		const message = new Message(this.serviceIP, this.contentSDK);
		server.get('/message', message.execute.bind(message));
	}
}
