import * as path from 'path';

import helmet from '@fastify/helmet';
import * as fastifyStatic from '@fastify/static';
import {fastify, FastifyInstance} from 'fastify';

import {Router} from '../router/router';
import {Logger} from '../util/logger';

export class WebServer {
	router: Router;

	server: FastifyInstance;

	constructor(router: Router) {
		this.router = router;
		this.server = fastify();
	}

	async start(port: number): Promise<void> {
		await this.server.register(helmet);
		
		this.server.register(fastifyStatic, {
			root: path.join(__dirname, '../../public')
		});

		this.router.applyRoutes(this.server);
			
		await this.server.listen({
			host: '::',
			port
		});
		Logger.info(this.constructor.name, {info: `web server started on port ${port}`});
	}
}
