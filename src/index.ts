import * as path from 'path';

import {ContentSDK} from 'api-sdk';
import * as fastify from 'fastify';
import * as helmet from 'fastify-helmet';
import * as fastifyStatic from 'fastify-static';

import {Config} from './config/config';
import {Router} from './router/router';
import {Logger} from './util/logger';

const start = async (): Promise<void> => {
	Logger.info(process.versions);

	const server = fastify({logger: Logger});
	server.register(helmet);

	server.register(fastifyStatic, {
		root: path.join(__dirname, '../../public')
	});

	if (!Config.serviceIP) {
		throw new Error('missing service ip');
	}

	const contentSDK = new ContentSDK(Config.serviceIP + ':50051');
	try {
		await contentSDK.connect();
	} catch (error) {
		Logger.error(error);
	}

	const router = new Router(Config.serviceIP, contentSDK);
	server.register(router.applyRoutes.bind(router));

	await server.listen(Config.port, '::');
};

start();
