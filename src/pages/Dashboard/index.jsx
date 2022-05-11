import React, { Component } from 'react';
import Header from '../../componentes/Header/Header.jsx';
import './styles.css';
import Card from '../../componentes/Card/Card.jsx';

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
          <div className="container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
         
          </div>
          
        </div>
        </React.Fragment>
      );
    }
    
  }


