import React from 'react';
import cinta from '../images/cinta.png';
import { Link } from 'react-router-dom';

export const FilmOption = ({ film }) => {

  return (
    <div>
      <article key={film.id} value={film.id} className='article'>
        <p className='imagefilm'>
          {film.poster_path === null || film.poster_path === undefined ? 
          <img className='imagefilm' src={ cinta } alt="imagen" /> : 
          <img className='imagefilm' src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${film.poster_path}`} alt="imagen" />
          }
          </p>
        <Link to={`/filmpage/${film.title}`}><h2>{film.title}</h2></Link>
        <p>{film.release_date}</p>
      </article>
    </div>

  );
};
