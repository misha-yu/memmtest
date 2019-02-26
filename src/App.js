import React from 'react';
import './App.css';
import Create_new_token from './components/create_new_token/Create_new_token';
import Сheck_tokens from './components/check_tokens/Check_tokens';
import Authorize from './components/Authorize/Authorize';
import Header from './components/Header';
//import {Router, Route, browserHistory, IndexRout} from 'react-router'; 
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';

////REDUX ++++
import {createStore} from 'redux';

const initialState = {
  result: 1,
  lastValues: []
};

const reducer = (state = initialState, action) => { // state = initialState  - так мы устанавливаем начальное значение стэйта как объект initialState
  switch (action.type){
    case "ADD":
        //state = state + action.payload; // так мы просто добавляем значение в стэйт

        // А так мы приравниевам к стэйты целый объект. 
        //И! Создаем новоый стэйт, чтобы потом по этим стэйтам можно бы было передвигаться:
        state = {
          //result:state.result,
          //lastValues: state.lastValues,
          ...state, // - Этот код аналогичен двум закоменченным строкам выше
          result: state.result + action.payload
        };
        break;
    case "SUBTRACT":
        state = {
          //result:state.result,
          //lastValues: state.lastValues,
          ...state, // - Этот код аналогичен двум закоменченным строкам выше
          result: state.result + action.payload
        };
    break;
  }
  return state;
};

const store = createStore(reducer, 100);

store.subscribe( () => {
  console.log("Store updated!", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 10
});

store.dispatch({
  type: "SUBTRACT",
  payload: 90
});
////REDUX ----

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
                  < Сheck_tokens/>
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



export default App;
