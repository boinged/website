import fastify from 'fastify';
import helmet from 'fastify-helmet';

import { Router } from './router/router';
import { Config } from './config/config';
import { Logger } from './util/logger';

const start = async (): Promise<void> => {
	const server = fastify({logger: Logger});
	server.register(helmet);

	if (!Config.serviceIP) {
		throw new Error('missing service ip');
	}

	let router = new Router(Config.serviceIP);
	server.register(router.applyRoutes.bind(router));

	await server.listen(Config.port, '::');
};

start();
