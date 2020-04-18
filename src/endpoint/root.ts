import express from 'express';
import got from 'got';

import { IEndpoint } from './iEndpoint';

export class Root implements IEndpoint {
    serviceUrl: string | undefined;

    constructor(serviceIP: string | undefined) {
        this.serviceUrl = `http://${serviceIP}`;
    }

	public async execute(request: express.Request, response: express.Response): Promise<void> {
        try {
            let result;
            if (this.serviceUrl) {
                    result = await got('content', {prefixUrl: this.serviceUrl}).json();
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
