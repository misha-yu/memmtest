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
  host: 'localhost',
  user: 'root',
  password: 'Misha17071977',
  database: 'react_sql',
  insecureAuth: true
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
