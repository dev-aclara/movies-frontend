import React,{useState, useEffect} from "react";
import Card from '../Card/Card.jsx';
import '../Main/styles.css';
let API_key = '&api_key=4aa8fb17eef1b70a40e280f7822e4cbe';
let base_url ='https://api.themoviedb.org/3';
let url =base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Popular","Infantis","Drama","Comédias"];

const Main=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState();
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    },[url_set])

    const getData=(movieType)=>{
        if(movieType==="Popular")
        {
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(movieType==="Infantis")
        {
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
        }
        if(movieType==="Drama")
        {
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
        }
        if(movieType==="Comédias")
        {
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
        }
        setUrl(url);

    }

    const searchMovie=(evt)=>{
        if(evt.key==="Enter")
        {
            url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
            setUrl(url);
            setSearch(" ");
        }
    }

    return(
        <>
            <div className="header-pesquisa">
            <header>
            <nav>
                <ul>
                {
                            arr.map((value,pos)=>{
                                return(
                                    <li><a href="#" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                                )
                            })
                        }
                </ul>
            </nav>

            <div className='botao-pesquisa'>
                <input type="text" placeholder='Pesquisar' 
                className='inputText' onChange={(e)=>{setSearch(e.target.value)}} 
                value={search} onKeyPress={searchMovie}></input>
            </div>
            </header>
        </div>
        
            <div className="container-movie">
                {
                    (movieData.length===0)?<p className="notfound">Filme não encontrado 🙁 </p>: movieData.map((res,pos)=>{
                        return(
                            <Card info={res} key={pos}/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Main;