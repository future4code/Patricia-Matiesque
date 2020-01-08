import React from 'react';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Filter from './Components/Filter';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from "react-redux";


const store = createStore(rootReducer);




function App() {
  return (
    <Provider store={store}>

      <Header />
      <MainSection />
      <Filter />
     
      </Provider>
  );
}

export default App;
