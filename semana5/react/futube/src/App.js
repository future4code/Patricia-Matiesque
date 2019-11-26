import React from 'react';
import logoFutureTube1 from './Imagens/logoFutureTube1.jpg';
import logoFutureTube2 from './Imagens/logoFutureTube2.jpg';
import logoFutureTube3 from './Imagens/logoFutureTube3.jpg';
import logoFutureTube4 from './Imagens/logoFutureTube4.jpg';
import logoFutureTube5 from './Imagens/logoFutureTube5.jpg';
import logoFutureTube6 from './Imagens/logoFutureTube6.jpg';
import logoFutureTube7 from './Imagens/logoFutureTube7.jpg';
import logoFutureTube8 from './Imagens/logoFutureTube8.jpg';

import './App.css';

function App() {
  return (
<div className="App">
    <div>
    <header className="App-header">
     <h1>FutureTube</h1>
     <input type="text" value="Busca"></input>
    </header>
    </div>
    <main className="App-main">
      <div>
        <div className="Media">
          <a href="http://soter.ninja/videos/1.mp4"> <img alt="logoFutureTube" src={logoFutureTube1}/></a>
          <p>Media 1</p>
        </div>
        <div className="Media">
          <a href="http://soter.ninja/videos/2.mp4"> <img alt="logoFutureTube" src={logoFutureTube2}/></a>
          <p>Media 2</p>
        </div>
        <div className="Media">
          <a href="http://soter.ninja/videos/3.mp4"> <img alt="logoFutureTube" src={logoFutureTube3}/></a>
          <p>Media 3</p>
        </div>
        <div className="Media">
          <a href="http://soter.ninja/videos/4.mp4"> <img alt="logoFutureTube" src={logoFutureTube4}/></a>
          <p>Media 4</p>
        </div>
        <div className="Media">
          <a href="http://soter.ninja/videos/5.mp4"> <img alt="logoFutureTube" src={logoFutureTube5}/></a>
          <p>Media 5</p>
        </div>
        <div className="Media">
          <a href="http://soter.ninja/videos/6.mp4"> <img alt="logoFutureTube" src={logoFutureTube6}/></a>
          <p>Media 6</p>
        </div>
        <div className="Media">
          <a href="http://soter.ninja/videos/7.mp4"> <img alt="logoFutureTube" src={logoFutureTube7}/></a>
          <p>Media 7</p>
        </div>
        <div className="Media">
          <a href="http://soter.ninja/videos/8.mp4"> <img alt="logoFutureTube" src={logoFutureTube8}/></a>
          <p>Media 8</p>
        </div>
      </div>
    </main>
    <footer className="App-footer">
      <p>Siga nossas redes sociais <a href="https://instagram.com/future4.br">Instagram</a> </p>
    </footer>
</div>
  );
}

export default App;
