const
    app = require('./app'),
    http = require('http');

const _port = 4000;

const server = http.createServer(app);

server.listen(_port, (err)=>{
    if(err) throw err;
    console.log(`Userservices running at port ${_port}`);
});