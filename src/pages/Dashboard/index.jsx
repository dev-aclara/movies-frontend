import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import './styles.css';

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
        <style>{"body { background-color: #ffff; }"}</style>
        <div className="Dashboard">
          <Header />
          <br />
          <span>Olá, {this.state.email}</span>
          
        </div>
        </React.Fragment>
      );
    }
    
  }


