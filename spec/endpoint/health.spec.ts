
import { FastifyRequest } from 'fastify';

import {Health} from '../../src/endpoint/health';

describe('health', () => {
	let endpoint: Health;
	let request: FastifyRequest;

	beforeEach(() => {
		endpoint = new Health();
		request = {} as FastifyRequest;
	});

	describe('execute', () => {
		it('replies with a health string', async () => {
			let reply = await endpoint.execute(request);
			expect(reply).toEqual('OK');
		});
	});
});
