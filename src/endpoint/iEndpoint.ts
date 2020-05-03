import { FastifyRequest } from 'fastify';

export interface IEndpoint {
	execute(request: FastifyRequest): Promise<string>;
}
