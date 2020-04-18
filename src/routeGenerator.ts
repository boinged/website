import express, {Router} from 'express';
import { Health } from './endpoint/health';
import { Root } from "./endpoint/root";

export class RouteGenerator {
    createRouter(): Router {
    	let router = express.Router();

        let root = new Root();
        router.get('/', root.execute.bind(root));

        let health = new Health();
        router.get('/healthz', health.execute.bind(health));

        return router;
    }
}
