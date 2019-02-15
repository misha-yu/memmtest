const express = require ('express');
const cors = require ('cors');
const mysql = require('mysql');


const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products'; // this is a request to db, which I don't have
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Misha17071977',
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

//console.log(connection);

app.use(cors());

app.get('/', (req,res) => {
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

app.listen(4000, () => {
  console.log(`Products server listening on port 4000`);
});