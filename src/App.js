/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.css';
import Create_new_token from './components/create_new_token/Create_new_token';
import Сheck_tokens from './components/check_tokens/Check_tokens';
import Authorize from './components/Authorize/Authorize';
import Header from './components/Header';
//import {Router, Route, browserHistory, IndexRout} from 'react-router'; 
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { connect } from 'react-redux';
import { dispatch } from 'rxjs/internal/observable/pairs';



class App extends React.Component {

  constructor(props){
    super();
    this.state = {
        
    }
  }

  Create_new_token_parent (){
    console.log('CREATE NEW TOKEN from Parent');
  }

  render() {
    var CreateNewProps = {
      btn_sgn: "Create New Tokens", // can use as: sign={CreateNewProps} ; or sign={CreateNewProps.btn_sgn}
    }
   

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-auto container_style" style={{}}>
          <Router>
            <div className="container">
            
            <Header/>
            
              
              <Route  path="/loomx" render={
                props =>(
                  <div>
                  < Create_new_token sign={CreateNewProps} CreateNewTokenMethod={this.Create_new_token_parent}/>
                  < Сheck_tokens SetTokensList={this.props.SetTokensList} Tokens_store={this.props.Tokens_store} />
                  </div>
                )}/>

                <Route  path="/rinkeby" component={Authorize}/>
              
              
            </div>
            </Router>
          </div>
        </div>
      </div> 
    
    
    );
  }
}

export default connect (
  state => ({
    Tokens_store: state.check_tokens_reducer
  }),
  dispatch => ({
    SetTokensList: (token) => { // Это экшн...
      //const payload = {token}
      dispatch ({type: 'SET_TOKENS_LIST', payload:token})
    }
  })
)(App);


//export default App;
