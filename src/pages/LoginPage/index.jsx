import React, { Component } from 'react';
import '../LoginPage/styles.css';
import { Navigate } from 'react-router-dom';

export default class login extends Component{
  constructor(props){
    super(props);
    this.state={
        email : '',
        senha : '',
        navigate: false,
        mgs:'',
        user: [],
    }

    this.login = this.login.bind(this);
  }

  login(e){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": this.state.email,
      "senha": this.state.senha,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:21262/login", requestOptions)
      .then(response => response.json())
      .then(response => {if(response === 1){
        this.setState({mgs:"Email ou senha invalidos"})
      }else{
        this.setState({navigate: true})
      }})
      .catch(error => console.log('error', error));

    }
    render(){
      if(this.state.navigate){
        sessionStorage.setItem('@web/email', this.state.email);
        return  <Navigate to={{ pathname: "/dashboard"}} replace/>
      }
      else{
        return (
          <React.Fragment>
          <div className="LoginPage">
              <div className="login_body">
                <div className="login_box">
                  <h1>Entre em sua conta</h1>
                  <form onSubmit={this.login}>
                    <div className="input_wrap">
                      <input type="text" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}  required></input>
                    </div>
                    <br />
                    <div className="input_wrap">
                      <input type="password" placeholder="Senha" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} required></input>
                    </div>
                    <br />
                    <div className="input_wrap">
                    <button>Entrar</button>
                    </div>
                    <a href="/">Não se cadastrou ainda? Clique aqui</a>
                  </form>
                </div>
              </div>
            </div>\
          </React.Fragment>
        );
      } 
    }
  }


