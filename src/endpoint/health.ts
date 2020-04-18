import express from 'express';

import { IEndpoint } from './iEndpoint';

export class Health implements IEndpoint {
	public async execute(request: express.Request, response: express.Response): Promise<void> {
		response.send('OK');
	}
}
