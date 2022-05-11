import React, { Component } from 'react';
import Header from '../../componentes/Header/Header.jsx';
import './styles.css';
import Main from '../../componentes/Main/Main.jsx';
//import Card from '../../componentes/Card/Card.jsx';

//let API_key = '&api_key=4aa8fb17eef1b70a40e280f7822e4cbe';
//let base_url ='https://api.themoviedb.org/3';
//let url =base_url+"/discover/movie?sort_by=popularity.desc"+API_key;

export default class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state={
        email : sessionStorage.getItem('@web/email'),

        filmes: [],
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
          <div className='welcome'>
            <h2>Fique por dentro do que está em alta.</h2>
          </div>
          <Main />
        </div>
        </React.Fragment>
      );
    }
    
  }


