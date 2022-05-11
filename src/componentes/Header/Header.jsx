import React, { Component }  from 'react';
import {Link} from 'react-router-dom';
let API_key = '&api_key=4aa8fb17eef1b70a40e280f7822e4cbe';
let base_url ='https://api.themoviedb.org/3';
let url =base_url+"/discover/movie?sort_by=popularity.desc"+API_key;


export default function Header (){
    return(
        <div className="header-principal">
            <header>
            <Link className='logo' to='/dashboard'>
            </Link>
            <div className='header-logo'>
                <p>TMDB's archive</p>
            </div>
            <Link className='favoritos' to='/favoritos'>
            </Link>
            </header>
        </div>
    )
}