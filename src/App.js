
import { Route, Routes } from 'react-router-dom';
import FilmPage from './pages/FilmPage';
import FavoritesPage from './pages/FavoritesPage';
import Home from './pages/Home';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/filmpage/:title" element={<FilmPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
   
  );
}

export default App;
