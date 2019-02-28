import React from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'

export const Header = (props) => {
  return (
    <div>
<div className="row">
                <div className="col smallTitle">Technical Demonstrator</div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-center" style={{padding: 'auto-left'}}><img className="hero_img" src="img_tech_demo/memm_logo.svg" /></div>
                </div>
                <div className="row" style={{textAlign: 'center'}}>
                   <div className="col-6 "><NavLink to="/loomx" className="tabs_top" activeClassName={'tab_active'}>Loomx</NavLink></div>
                   <div className="col-6"><NavLink to="/rinkeby" className="tabs_top" activeClassName={'tab_active'}>Rinkeby</NavLink></div>
              </div>

    </div>

  )

};

export default Header;