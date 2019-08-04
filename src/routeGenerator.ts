import express, {Router} from 'express';
import { Health } from './endpoint/health';

export class RouteGenerator {
	router: Router;

	constructor() {
		this.router = express.Router();

		let endpoints = [new Health()];
		endpoints.forEach((endpoint) => this.router.get('/' + endpoint.constructor.name, endpoint.execute.bind(endpoint)));
	}
}
