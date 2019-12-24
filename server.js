const app = require('./app');
const port = process.env.PORT || 2019;

const server = http.createServer(app);

server.listen(port);