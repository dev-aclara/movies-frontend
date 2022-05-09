import React, { Component } from 'react';

import '../Dashboard/styles.css';

export default class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state={
        email : sessionStorage.getItem('@web/email')
    }
  }
    render(){
      return (
        <React.Fragment>
        <div className="Dashboard">
          <h3>Olá, {this.state.email}</h3>
          <div className="login_body">
              <div className="login_box">
              <h1>Perfis</h1>
              </div>
            </div>
        </div>
        </React.Fragment>
      );
    }
    
  }


