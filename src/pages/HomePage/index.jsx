
import React from "react";
import '../LoginPage/styles.css';

function HomePage() {
    return (
        
        <div className="LoginPage">
          <div className="login_body">
            <div className="login_box">
              <h1>Cadastre-se</h1>
              <form>
                <div className="input_wrap">
                  <input type="text" placeholder="Email"></input>
                </div>
				        <br />
                <div className="input_wrap">
                  <input type="password" placeholder="Senha"></input>
                </div>
				        <br />
                <div className="input_wrap">
                  <input type="date" placeholder="Data de nascimento"></input>
                </div>
                <div className="input_wrap">
                  <button>Cadastrar</button>
                </div>
              </form>
              <a href="/login">Já tem uma conta? Clique aqui</a>
            </div>
          </div>
        </div>
		
    );
  }
  
export default HomePage;
  