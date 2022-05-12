import React from 'react';
import {FiLogOut } from 'react-icons/fi';

const logout = () => {
    sessionStorage.clear();
    window.location.href = '/';
  }

export default function Header (){
    return(
        <div className="header-principal">
            <header>
            <div className='header-logo'>
                <p>TMDB's archive</p>
            </div>
            <div className='btn-sair'>
                <a onClick={logout}>
                <FiLogOut />
                </a>
            </div>
            </header>
        </div>
    )
}