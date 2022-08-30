import React from 'react';
import './App.css';
import Routes from './routes';
import Provider from './context/Provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
