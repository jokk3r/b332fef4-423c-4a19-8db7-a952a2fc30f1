import React, { useState } from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route
          path="/"
          element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
