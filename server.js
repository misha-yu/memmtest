const {createServer} = require('http');
const express = require ('express');
const compression = require ('compression');
const morgan = require ('morgan');
const path = require ('path');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

//const cors = require ('cors');
const mysql = require('mysql'); //zzz

const app = express();
const dev = app.get('env') != 'production'


// try to connect to database
const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products'; // this is a request to db, which I don't have
const connection = mysql.createConnection({
  host: 'eu-cdbr-west-02.cleardb.net',
  user: 'b21add02c8e9f2',
  password: '17bc1bca',
  database: 'react_sql',
  insecureAuth: true
});

connection.connect( (err) => {
  console.log("trying to connect to DTB");
  if (err){
    console.log(">>> "+err);
    return err;
  }else{
    console.log('CONNECTED');
  }
});


if (!dev) {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));

  app.use(express.static(path.resolve(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}

if (dev){
  app.use(morgan('dev'));
}

const server = createServer(app);

server.listen(PORT, err => {
  if (err) throw err;

  console.log('Server started');
})
