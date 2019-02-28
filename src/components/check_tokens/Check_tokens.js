import React from 'react';

class Сheck_tokens extends React.Component {

  constructor(props){
    super();

    let InitialTokensList = [
        "Token #19809870987098790",
        "Token #19809870987098791",
        "Token #19809870987098792",
        "Token #19809870987098793"
      ];

    this.state= {
      tokensList: InitialTokensList
    };

    this.onChangeFn = this.onChangeFn.bind(this); // надо прикрепить функцию к конструктору 
  }

  onChangeFn (e) {
    if (e.key === 'Enter') {
      // тут мы можем получать данные с сервера
      this.state.tokensList.push(e.target.value);
      // очищаем val для input
      e.target.value = '';
      // Устанавливаем State для компонента
      this.setState({
        tokensList: this.state.tokensList
      })
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
                    {this.state.tokensList.map((tokensElement, i) => 
                      <li key={i}>{tokensElement}</li>
                    )}
                  </ul>
                </div>
              </div>
      </div>  
    );
    
  }
}; 

//Сheck_tokens.propTypes = {
//tokensElement:''
//}

export default Сheck_tokens;