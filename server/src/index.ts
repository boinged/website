import * as path from 'path';

import fastifyHelmet from '@fastify/helmet';
import fastifyStatic from '@fastify/static';
import {ContentSDK} from 'api-sdk';
import fastify from 'fastify';

import {Config} from './config/config';
import {Router} from './router/router';
import {Logger} from './util/logger';

const start = async (): Promise<void> => {
	Logger.info(process.versions);

	const server = fastify({logger: Logger});
	server.register(fastifyHelmet);

	server.register(fastifyStatic, {
		root: path.join(__dirname, '../../public')
	});

	if (!Config.serviceIP) {
		throw new Error('missing service ip');
	}

	const contentSDK = new ContentSDK(Config.serviceIP + ':50051');
	try {
		// await contentSDK.connect();
	} catch (error) {
		Logger.error(error);
	}

	const router = new Router(Config.serviceIP, contentSDK);
	server.register(router.applyRoutes.bind(router));

	await server.listen({
		host: '::',
		port: Config.port
	});
};

start();
