import {Health} from '../../src/endpoint/health';
import express from 'express';

describe('health', () => {
    let endpoint: Health;
    let request: express.Request;
    let response: express.Response;

    beforeEach(() => {
        endpoint = new Health();
        request = {} as express.Request;
        response = jasmine.createSpyObj('response', ['send']);
    });

    describe('execute', () => {
        it('responds successfully', () => {
            endpoint.execute(request, response);
            expect(response.send).toHaveBeenCalledWith('OK');
        });
    });
});
