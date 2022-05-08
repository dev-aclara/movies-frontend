import React, { Component } from 'react';
import '../LoginPage/styles.css';

export default class Cadastro extends Component{

  constructor(props){
    super(props);
    this.state={
        email: '',
        senha: '',
        dataNascimento: '',
      }

    this.cadastrar = this.cadastrar.bind(this);
  }
  cadastrar(e){ 
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "email": this.state.email,
        "senha": this.state.senha,
        "dataNascimento": this.state.dataNascimento
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:21262/", requestOptions)
        .then(response => response.json())
        .then(response =>{
          if(response === "Já existe esse email"){
            alert('Já existe esse email cadastrado')
          }else{
            alert('Cadastro feito com sucesso')
            
          }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        e.preventDefault()
  }


  render(){
    return(
        <React.Fragment>
        <div className="LoginPage">
          <div className="login_body">
            <div className="login_box">
              <h1>Cadastre-se</h1>
              <form onSubmit={this.cadastrar}>
                <div className="input_wrap">
                  <input type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="Email" autoComplete="on" required></input>
                </div>
				        <br />
                <div className="input_wrap">
                  <input type="password" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} placeholder="Senha" autoComplete="off" required></input>
                </div>
				        <br />
                <div className="input_wrap">
                  <input type="date" value={this.state.dataNascimento} onChange={(e) => this.setState({dataNascimento: e.target.value})}placeholder="Data de nascimento" required></input>
                </div>
                <div className="input_wrap">
                  <button>Cadastrar</button>
                </div>
              </form>
              <a href="/login">Já tem uma conta? Clique aqui</a>
            </div>
          </div>
        </div>
        </React.Fragment>
        );
    }
}