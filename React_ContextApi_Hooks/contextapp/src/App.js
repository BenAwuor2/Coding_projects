import React from 'react';
import './index';
import Navbar from './components/navbar';
import Booklist from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <Booklist/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
