import React, { Component } from 'react';
import '../LoginPage/styles.css';
import { Link } from 'react-router-dom';

export default class login extends Component{
  constructor(props){
    super(props);
    this.state={
        email : '',
        senha : '',
    }

    this.login = this.login.bind(this);
  }

  login(e){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": this.state.email,
      "senha": this.state.senha,
      "pessoa": []
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:21262/login", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }
    render(){
      sessionStorage.setItem('@web/email', this.state.email );
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
                  <Link to={"/dashboard"} className="btnEntrar"><button>Entrar</button></Link>
                  </div>
                  <a href="/">Não se cadastrou ainda? Clique aqui</a>
                </form>
              </div>
            </div>
          </div>

        </React.Fragment>
      );
    }
    
  }


