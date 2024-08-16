const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3001',
    methods:'GET, POST, PUT, DELETE'
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;