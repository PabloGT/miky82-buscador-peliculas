
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import  useLocalStorage  from '../../hooks/useLocalStorage'
import { FilmOption } from '../../components/FilmOption';

function Main (){

  const [data] = useLocalStorage('favoritos', [])


      const filmFavorites = data.map((film) => (
          <FilmOption key={film.id} film={film} />
      ))


    return (
      <div className="App">
        <h2>Listado de mis películas favoritas :</h2>
        

        <div className='mainlist'>
            {data === [] ? ( '' ) : (filmFavorites)}
        </div>
        <Link to={"/main"} className="link-enter">!!! volver ¡¡¡</Link>

      </div>
    );
  }


export default Main;
