import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../App.css';
import cinta from '../../images/cinta.png';
import  useLocalStorage  from '../../hooks/useLocalStorage'


function FilmPage ( ) {
  const [results, setResults] = useState([]);
  const  { title }  = useParams();
  const [data, setData] = useLocalStorage("favoritos", [])
  const [datalog, setDatalog] = useState(data)


          const filmExists = datalog.find(
          (datafilm) => Number(datafilm.id) === Number(results.id),  
          )  


  useEffect (() => {
    const loadfilm = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=${title}`,
  
        );
        
        if (res.ok) {
          const  data  = await res.json();
          setResults(data.results[0])   
          
        } else {
          console.error('algo fue mal en la peticion');
    
        }
      } catch (error) {
        console.error('error de comunicacion');
   
      }
    }; 

    loadfilm()

  },[title])


    return (
      <div className="App">
        <article key={results.id} className="onearticle">
        <h2>Titulo : {results.title}</h2>

            {results.poster_path === null || results.poster_path === undefined ? 
          <img className='imagefilm' src={ cinta } alt="imagen" /> : 
          <img className='imagefilm' src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${results.poster_path}`} alt="imagen" />
          }
    
        <p>Titulo original : {results.original_title}</p>
        <p>Argumento : {results.overview}</p>
        <p>Fecha de Estreno : {results.release_date}</p>
        <p>Votos : {results.vote_count}</p>
        <p>Idioma original : {results.original_language}</p>

        { filmExists === undefined ?
                <button className='addfavorites' onClick={() =>{
                  
                    const resultposition = datalog.indexOf(results);
                    console.log('resultposition', resultposition)
    
                    if(resultposition === -1 ){
                      console.log('datalog', datalog)
                      console.log('results', results)
                      const mas = datalog.push(`${results.title}`)
                      console.log('mas', mas)
                      setData(datalog) 
                      // localStorage.setItem(key, JSON.stringify(data))
                      
                      console.log('La película ha sido añadida a favoritos')

                    }else{

                      console.log('la pelicula ya esta en favoritos')
                    }

            }
            }>Añadir a favoritos</button>
        :
              <button className='addfavorites' onClick={() =>{

                  const filmPosition = datalog.findIndex(
                    (datafilm) => Number(datafilm.id) === Number(filmExists.id),
                  )
                  console.log('filmPosition', filmPosition)
                  
                  datalog.splice(filmPosition, 1)
                  setData('favoritos', datalog)

                  console.log('La película ha sido borrada de favoritos ')
        
          }
          }>eliminar de favoritos</button>

        }




        
        
        </article>
        <Link to={"/main"} className="link-enter">!!! volver ¡¡¡</Link>
        
      </div>
    );
  }


export default FilmPage;
