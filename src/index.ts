import path from 'path';

import fastify from 'fastify';
import fastifyHelmet from 'fastify-helmet';
import fastifyStatic from 'fastify-static';

import { Router } from './router/router';
import { Config } from './config/config';
import { Logger } from './util/logger';

const start = async (): Promise<void> => {
	const server = fastify({logger: Logger});

	server.register(fastifyHelmet);

	server.register(fastifyStatic, {
		root: path.join(__dirname, '../../public')
	});

	if (!Config.serviceIP) {
		throw new Error('missing service ip');
	}

	let router = new Router(Config.serviceIP);
	server.register(router.applyRoutes.bind(router));

	await server.listen(Config.port, '::');
};

start();
