import { FastifyInstance } from 'fastify';

import { Health } from '../endpoint/health';
import { Root } from '../endpoint/root';

export class Router {
	serviceIP: string;

	constructor(serviceIP: string) {
		this.serviceIP = serviceIP;
	}

	async applyRoutes(server: FastifyInstance): Promise<void> {
		const health = new Health();
		server.get('/healthz', health.execute.bind(health));

		const root = new Root(this.serviceIP);
		server.get('/', root.execute.bind(root));
	}
}
