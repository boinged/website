import express from 'express';

export interface IEndpoint {
	execute(request: express.Request, response: express.Response): Promise<void>;
}
