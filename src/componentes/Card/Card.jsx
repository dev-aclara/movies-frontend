import React from "react";
import '../Main/styles.css';

const Card=(movie)=>{
    let img_path="https://image.tmdb.org/t/p/w500";
    return(
        <>
            <div className="movie">
            <img src={img_path+movie.info.poster_path} className="poster"></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                    </div>
                    <div className="overview">
                        {movie.info.overview}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;