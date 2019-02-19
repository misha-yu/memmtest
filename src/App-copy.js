import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  
  //let products = [];

  state  = {
    products : [],
    product: {
      name: 'sample product',
      price: 20
    }
  }

  componentDidMount(){
    this.getProducts()
  }
  
  // http://localhost:4000/products https://memm-heroku.herokuapp.com/products
  
  getProducts = _ => {
    fetch('http://localhost:5000/products') 
    .then(response => response.json())
    .then(({data}) => {
      console.log("zzz"+  data)
    })
    .catch(err => console.error(err))
    }
  
  renderProduct = ({product_id, name}) => <p key={product_id}>{name}</p>


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.products.map(this.renderProduct)}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React wow man
          </a>
        </header>
      </div>
    );
  }
}

export default App;
