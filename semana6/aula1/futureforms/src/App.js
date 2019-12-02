import React from 'react';
import './App.css';
import Etapa1 from './Components/Etapa1/index';
import Etapa2 from './Components/Etapa2/index';
import Etapa3 from './Components/Etapa3/index';
import Final from './Components/Final/index';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      etapa = 1
    };
  }

botaoEtapa1 = () => {
  this.setState({ etapa = ""})
}  

render(){
  return (
    <div className="App">
     <Etapa1 />
     <button >Proxima Etapa</button>
     <Etapa2></Etapa2>
     <button >Proxima Etapa</button>
     <Etapa3></Etapa3>
     <button >Proxima Etapa</button>
     <Final></Final>
    </div>
  );
}
}

export default App;
