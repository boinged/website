import { FastifyRequest } from 'fastify';
import got from 'got';

import { IEndpoint } from './iEndpoint';

export class Message implements IEndpoint {
	serviceIP: string;

	constructor(serviceIP: string) {
		this.serviceIP = serviceIP;
	}

	public async execute(request: FastifyRequest): Promise<string> {
		let result = '';
		try {
			result = await got('content', {prefixUrl: `http://${this.serviceIP}`}).json();
		} catch (error) {
			console.error(error);
		}
		return result;
	}
}
