
import React, { useState } from 'react';
import '../../App.css';
import { FilmOption } from '../../components/FilmOption';
import { Link } from 'react-router-dom';

function Main (){

  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const changeInput = (e) => {
    setInput(e.target.value);
  };


  const loadfilm = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=${input}`,

      );
      
      if (res.ok) {
        const  data  = await res.json();
        setResults(data.results)    
        setInput('')
        
      } else {
        console.error('algo fue mal en la peticion');
  
      }
    } catch (error) {
      console.error('error de comunicacion');
 
    }
  };


      const filmResult = results.map((film) => (
          <FilmOption key={film.id} film={film} />
      ))


    return (
      <div className="App">
        <p className="favoriteslink" > 
        <Link to={"/favorites"} className="link">Visita tu lista de favoritos</Link>
        </p>
        <h2>Escribe el título de la película que quieres buscar, o una palabra que contenga:</h2>
        
        <form className="formsearch">
            <div>
              <label htmlFor="search"></label>
              <input
                className="input"
                type="text"
                id="search"
                value={input}
                onChange={changeInput}
                placeholder="escribe un título..."
              ></input>
              {input !== '' ? (
                <button
                  onClick={() => {
                    loadfilm()
                    setInput('');
                  }}
                  className="buttoninput"
                  type="submit"
                >
                    Buscar                                
                </button>
              ) : (
                <button className="buttoninput" disabled>
                  Buscar
                </button>
              )}

            </div>
        </form>

          <button className="clearbutton" 
            onClick={() => {
              setResults([]);
            }}
          >Limpiar</button>    

        <div className='mainlist'>
            {results === [] ? ( '' ) : (filmResult)}
        </div>

      </div>
    );
  }



export default Main;
