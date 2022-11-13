import {ContentSDK} from 'api-sdk';
import got from 'got';

import {IBody} from '../model/iBody';
import {Logger} from '../util/logger';

import {IEndpoint} from './iEndpoint';

export class Message implements IEndpoint {
	serviceIP: string;

	contentSDK: ContentSDK;

	constructor(serviceIP: string, contentSDK: ContentSDK) {
		this.serviceIP = serviceIP;
		this.contentSDK = contentSDK;
	}

	public async execute(body: IBody): Promise<string> {
		/*
		try {
			const grpcResult = await this.contentSDK.getContent();
			Logger.info(`got grpc result ${grpcResult}`);
			return grpcResult;
		} catch {
			// ignore
		}
		*/

		let result = '';
		try {
			result = await got('content', {prefixUrl: `http://${this.serviceIP}`}).json();
		} catch (error) {
			Logger.error(this.constructor.name, {error: (error as Error).stack});
		}
		return result;
	}
}
