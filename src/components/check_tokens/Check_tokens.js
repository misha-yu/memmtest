import React from 'react';

class Сheck_tokens extends React.Component {

  constructor(props){
    super();

    this.state= {
     // tokensList: InitialTokensList
    };

    this.onChangeFn = this.onChangeFn.bind(this); // надо прикрепить функцию к конструктору 
  }

  onChangeFn (e) {
    console.log('>>>>>>> '+this.props.Tokens_store);
    if (e.key === 'Enter') {
      this.props.SetTokensList(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div>
      <div className="row">
                <div className="col second_title">CHECK TOKEN ADDRESS</div>
              </div>
              <div className="row">
                <div className="col">
                  <input id="check_iput" className="input_style" onKeyPress={this.onChangeFn} placeholder="Add blockchain adress here" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="col tokens_list_style">
                  <ul>
                   {this.props.Tokens_store.map((tokensElement, i) =>
                    <li key={i}>{tokensElement}</li>
                    )}
                  </ul>
                </div>
              </div>
      </div>  
    );
    
  }
}; 

export default Сheck_tokens;
