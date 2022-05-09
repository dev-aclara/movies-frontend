import React, { Component } from 'react';
import '../LoginPage/styles.css';

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
        </div>
        </React.Fragment>
      );
    }
    
  }


