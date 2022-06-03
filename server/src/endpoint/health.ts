import {FastifyRequest} from 'fastify';

import {IEndpoint} from './iEndpoint';

export class Health implements IEndpoint {
	async execute(request: FastifyRequest): Promise<string> {
		return 'OK';
	}
}
