import {ContentSDK} from 'api-sdk';

import {Config} from './config/config';
import {Router} from './router/router';
import {WebServer} from './server/webServer';
import {Logger} from './util/logger';

const start = async (): Promise<void> => {
	if (!Config.serviceIP) {
		throw new Error('missing service ip');
	}

	const contentSDK = new ContentSDK(Config.serviceIP + ':50051');
	try {
		// await contentSDK.connect();
	} catch (error) {
		Logger.error('index', {error: (error as Error).stack});
	}

	const router = new Router(Config.serviceIP, contentSDK);
	const webServer = new WebServer(router);
	await webServer.start(Config.port);
};

start();
