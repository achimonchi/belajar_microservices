const
    app = require('./app'),
    http = require('http');

const _port = process.env.PORT;

const server = http.createServer(app);

server.listen(_port, (err)=>{
    if(err) console.error(err);
    console.log(`Userservices running at port ${_port}`);
});