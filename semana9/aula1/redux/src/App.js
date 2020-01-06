import React from 'react';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Filter from './Components/Filter';

const addText = () => {
  return {
    type: "ADD_TEXT",
    payload: {
      text: "use redux"
    } 
  };
};
const cleanText = () => {
  return {
    type: "CLEAN_TEXT",
    payload: {
      id: 1
    } 
  };
};
const selectAll = () => {
  return {
    type: "SELECT_ALL",
    payload: {
      listText: []
    } 
  };
};
const cleanAll = () => {
  return {
    type: "CLEAN_ALL",
    payload: {
      listText: []
    } 
  };
};




function App() {
  return (
    <div>

      <Header />
      <MainSection />
      <Filter />
     
    </div>
  );
}

export default App;
