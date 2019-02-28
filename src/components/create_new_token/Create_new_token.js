import React from 'react';
import App from '../../App';

class Сreate_new_token extends React.Component {
Create_New_Token () { 
  console.log('CLICK BUTTON');
  // call it with: onClick={() => this.Create_New_Token() }
}

  render() {
    return (
      <div>
      <div className="row">
                <div className="col d-flex justify-content-center" style={{paddingTop: '23px'}}>
                  <div className="btn2 ">
                    <div className="btn2_in" onClick={this.props.CreateNewTokenMethod}>{this.props.sign.btn_sgn}</div>
                  </div>
                </div>
              </div>
              <div className="row devider"></div>
              </div>  
    );
    
  }
}; 

export default Сreate_new_token;