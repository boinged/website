import express from 'express';

import { IEndpoint } from './iEndpoint';

export class Health implements IEndpoint {
	public execute(request: express.Request, response: express.Response): void {
		response.send('OK');
	}
}
