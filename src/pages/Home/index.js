import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Home () {

 
    return (
      <div className="App">
        <h1 className="title1">Buscador de Peliculas</h1>
        <Link to={"/main"} className="link-enter">!!! Haz clic aqui para empezar ¡¡¡</Link>
      </div>
    );
  }


export default Home;
