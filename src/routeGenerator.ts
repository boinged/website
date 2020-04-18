import express, {Router} from 'express';
import { Health } from './endpoint/health';
import { Root } from "./endpoint/root";
import { Config } from './config';

export class RouteGenerator {
    createRouter(): Router {
    	let router = express.Router();

        let root = new Root(Config.serviceUrl);
        router.get('/', root.execute.bind(root));

        let health = new Health();
        router.get('/healthz', health.execute.bind(health));

        return router;
    }
}
