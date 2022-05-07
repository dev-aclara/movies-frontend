
import React from "react";
import '../LoginPage/styles.css';

function LoginPage() {
    return (
        
        <div className="LoginPage">
          <div className="login_body">
            <div className="login_box">
              <h1>Entre em sua conta</h1>
              <form>
                <div className="input_wrap">
                  <input type="text" placeholder="Email" required></input>
                </div>
				        <br />
                <div className="input_wrap">
                  <input type="password" placeholder="Senha" required></input>
                </div>
				        <br />
                <div className="input_wrap">
                  <button>Entrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
  
export default LoginPage;
  