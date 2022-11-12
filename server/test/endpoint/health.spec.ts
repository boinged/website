import * as assert from 'node:assert/strict';
import {before, beforeEach, describe, it} from 'node:test';

import {Health} from '../../src/endpoint/health';
import {IBody} from '../../src/model/iBody';

describe('health', () => {
	let endpoint: Health;
	let body: IBody;

	before(() => {
		endpoint = new Health();
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
