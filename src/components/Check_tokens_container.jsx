import React from 'react';
import Check_tokens from './Check_tokens';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {SetTokensList} from '../store/check_tokens/actions';
import Сheck_tokens from './Check_tokens';

class Сheck_tokens_container extends React.Component {


  render() {
    return (
      < Сheck_tokens SetTokensList={this.props.SetTokensList} Tokens_store={this.props.Tokens_store} />
    );
  }
};

const putStateToProps = state => {
  return {
    Tokens_store: state.check_tokens_reducer.tokensList // check_tokens_reducer - берется из файла combined_reducers
  }
}

const putActionsToProps = (dispatch) => {
  return{
    SetTokensList: bindActionCreators(SetTokensList, dispatch)
  }
}

// CONNECT
export default connect (
  putStateToProps,
  putActionsToProps
)(Сheck_tokens_container);
//export default Сheck_tokens_container;
