import React, { Component } from 'react';
import { Navigate } from 'react-router';
import '../LoginPage/styles.css';

export default class login extends Component{
    constructor(props){
        super(props);
        this.state={
            email : '',
            senha : '',
            redirect:false,
            user:[],
        }

        this.login = this.login.bind(this);
    }

    login(){
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
            "email": this.state.email,
            "senha": this.state.senha
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
          alert("E-mail ou senha inválidos");
        }else{
          this.setState({user:response || [], redirect:true})
        }})

        .catch(error => console.log('error', error));
            
        console.log(this.state.user);
            
    }
    render(){
        if(this.state.redirect){
            sessionStorage.setItem('@web/id', this.state.user.id)
            sessionStorage.setItem('@web/email', this.state.user.email)
        
            return <Navigate to={{ pathname: "/dashboard" }} />
        }
        return(
            <React.Fragment>
            <div className="login_body">
              <div className="login_box">
                <h1>Entre em sua conta</h1>
                <form onSubmit={()=> this.login}>
                    <input  className="input_wrap" type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="Email"></input>
                    <input  className="input_wrap"  type="password" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} placeholder="Senha"></input>
                    <div className="input_wrap">
                    <button type="button" onClick={this.login} name="" value="Login">Entrar</button>
                    </div>

                    <a href="/register">Não se cadastrou ainda? Clique aqui</a>
                </form>
                </div>
            </div>
            </React.Fragment>
            );
        }
    }