import React, { Component }  from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './styles.css';


export default function Header (){
    return(
        <div className="header">
            <header>
            <nav>
                <ul>
                    <li><a href="#">Teste</a></li>
                    <li><a href="#">Teste</a></li>
                    <li><a href="#">Teste</a></li>
                    <li><a href="#">Teste</a></li>
                    <li><a href="#">Teste</a></li>
                </ul>
            </nav>

            <div className='botao-pesquisa'>
                <input type="text" placeholder='Pesquisar' className='inputText'></input>
                <AiOutlineSearch />
            </div>
            </header>
        </div>
    )
}