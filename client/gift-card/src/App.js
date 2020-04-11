import React from 'react';
import './App.css';

import Button from './components/UI/Button/Button';
import Header from './components/UI/Header/Header';
import InfoDisplay from './components/UI/InfoDisplay/InfoDisplay';

function App() {
  return (
    <div className="App">
      <Header userName={'Ben'}></Header>
      <Button btnType="General">Click Me</Button>
      <InfoDisplay>ID - Asdads</InfoDisplay>
    </div>
  );
}

export default App;
