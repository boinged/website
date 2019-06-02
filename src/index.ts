import express = require('express');
import helmet = require('helmet');

let app = express();

app.use(helmet());

app.use(express.static('public'));

let port = 8080;
app.listen(port, () => {
	console.info('Server', process.pid, 'listening on port', port);
});
