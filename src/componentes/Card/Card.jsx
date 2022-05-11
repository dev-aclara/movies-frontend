import react from "react";
import '../Header/styles.css';


const Card=()=>{
    return(
        <>
            <div className="movie">
                <img src="https://static.stealthelook.com.br/wp-content/uploads/2022/03/qual-a-serie-o-filme-e-o-livro-mais-lido-do-mundo-avatar-20220321164246.jpg" className="poster"></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">Título</h4>
                    </div>
                    <div className="overview">
                        <h1>overview</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;