import React, { Component }  from 'react';
import { BiMoviePlay } from 'react-icons/bi';
import { GoChecklist } from 'react-icons/go';
import './styles.css';
import {Link} from 'react-router-dom';

export default function Header (){
    return(
        <div className="header">
            <header>
            <Link className='logo' to='/dashboard'>
                <BiMoviePlay /> 
            </Link>
            <div className='titulo'>
                <h2>TheMovieDB - Jera</h2>
            </div>
            <Link className='favoritos' to='/favoritos'>
                <GoChecklist />
            </Link>
            </header>
        </div>
    )
}