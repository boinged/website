import * as assert from 'node:assert/strict';
import {before, beforeEach, describe, it} from 'node:test';

import {HealthEndpoint} from '../../src/endpoint/healthEndpoint';
import {IBody} from '../../src/model/iBody';

describe('health', () => {
	let endpoint: HealthEndpoint;
	let body: IBody;

	before(() => {
		endpoint = new HealthEndpoint();
	});

	beforeEach(() => {
		body = {};
	});

	describe('execute', () => {
		it('replies with a health string', async () => {
			const reply = await endpoint.execute(body);
			assert.equal(reply, 'OK');
		});
	});
});
