const
    app = require('./app'),
    http = require('http');

const server = http.createServer(app);
const _port = 5000;

server.listen(_port,(err)=>{
    if(err) throw err;
    console.log(`Authservices running at port ${_port}`)
})