import express from 'express';
import got from 'got';

import { IEndpoint } from './iEndpoint';

export class Root implements IEndpoint {
    serviceIP: string | undefined;

    constructor(serviceIP: string | undefined) {
        this.serviceIP = serviceIP;
    }

	public async execute(request: express.Request, response: express.Response): Promise<void> {
        try {
            let result;
            if (this.serviceIP) {
                result = await got('content', {prefixUrl: `http://${this.serviceIP}`}).json();
            } else {
                result = 'service URL undefined';
            }
            console.log(result);
            response.send(result);
        } catch (error) {
            console.error(error);
        }
	}
}
