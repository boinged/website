import { FastifyInstance } from 'fastify';

import { Health } from '../endpoint/health';
import { Message } from '../endpoint/message';

export class Router {
	serviceIP: string;

	constructor(serviceIP: string) {
		this.serviceIP = serviceIP;
	}

	async applyRoutes(server: FastifyInstance): Promise<void> {
		const health = new Health();
		server.get('/healthz', health.execute.bind(health));

		const message = new Message(this.serviceIP);
		server.get('/message', message.execute.bind(message));
	}
}
