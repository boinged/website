import express from 'express';
import helmet from 'helmet';
import { RouteGenerator } from './routeGenerator';
import { Config } from './config';

let app = express();

app.use(helmet());

app.use(express.static('public'));

let routeGenerator = new RouteGenerator();
let router = routeGenerator.createRouter();
app.use('/', router);

let port = Config.port;
app.listen(port, () => {
	console.info('web server', process.pid, 'listening on port', port);
});
