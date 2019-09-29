import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import MainPage from './page/MainPage'

function App() {
  return (
    <div style={styles.body}>
      <MainPage></MainPage>
    </div>
  );
}

export default App;

const styles = {
  body : {
    backgroundColor : "#e8eaed", 
    right: 100,
    top: 0
  }
}