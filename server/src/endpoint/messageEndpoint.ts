import {ContentSDK} from 'api-sdk';

import {IBody} from '../model/iBody';
import {IMessageResult} from '../model/iMessageResult';
import {Logger} from '../util/logger';

import {IEndpoint} from './iEndpoint';

export class MessageEndpoint implements IEndpoint {
	serviceIP: string;

	contentSDK: ContentSDK;

	constructor(serviceIP: string, contentSDK: ContentSDK) {
		this.serviceIP = serviceIP;
		this.contentSDK = contentSDK;
	}

	public async execute(body: IBody): Promise<IMessageResult> {
		/*
		try {
			const grpcResult = await this.contentSDK.getContent();
			Logger.info(`got grpc result ${grpcResult}`);
			return grpcResult;
		} catch {
			// ignore
		}
		*/

		const result = {} as IMessageResult;
		try {
			const url = `http://${this.serviceIP}/content`;
			const response = await fetch(url);
			const json = await response.json();
			Object.assign(result, json);
		} catch (error) {
			Logger.error(this.constructor.name, {error: (error as Error).stack});
		}
		return result;
	}
}
