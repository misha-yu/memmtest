const {createServer} = require('http');
const express = require ('express');
const compression = require ('compression');
const morgan = require ('morgan');
const cors = require ('cors');
const path = require ('path');
const mysql = require('mysql');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);
//const cors = require ('cors');
//tratata
//Test
// This is a comment from Misha
const app = express();
const dev = app.get('env') != 'production';

app.use(cors());
//אפûג

// try to connect to database
const connection = mysql.createConnection({
  host: 'eu-cdbr-west-02.cleardb.net',
  user: 'b21add02c8e9f2',
  password: '17bc1bca',
  database: 'heroku_f436156b9325bd8',
  insecureAuth: true
});
// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: '3306',
//   user: 'root',
//   password: 'Misha17071977',
//   database: 'react_sql',
//   insecureAuth: true
// });

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

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  res.send('go to /products to see products');
});

app.get('/products/add', (req,res) => {
  const { name, price } = req.query;
  console.log(name, price);
  const INSERT_PRODUCTS_QUERY = `INSERT INTO products (name, price) VALUES ('${name}', ${price})`;
  connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
    if (err){
      return res.send(err)
    }
    else {
      return res.send('successfully added products');
    }
  })
  //res.send('adding products');
});

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products';
app.get('/products', (req, res) => {
  
  connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  });
  
});

if (dev){
  app.use(morgan('dev'));
}

const server = createServer(app);

server.listen(PORT, err => {
  if (err) throw err;

  console.log('Server started');
})
