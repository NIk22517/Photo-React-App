import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PhotoDetails from './pages/PhotoDetails';
import SearchPhoto from './pages/SearchPhoto';
import Details from './components/Details';

const App = () => {
  return (
    <BrowserRouter>
    <SearchPhoto />
        <Routes>
          <Route path='/photos/:id/' element={ <PhotoDetails /> } />
          <Route exact path='/serach/:search' element={ <Details /> } />
          <Route path='/' element={ <Home /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App;