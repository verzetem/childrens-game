import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GameBoard from './components/GameBoard';
import one from './components/img/1.jpg';
import two from './components/img/2.jpg';
import three from './components/img/3.jpg';
import four from './components/img/4.jpg';
import five from './components/img/5.jpg';
import six from './components/img/6.jpg';
import seven from './components/img/7.jpg';
import eight from './components/img/8.jpg';
import nine from './components/img/9.jpg';

class App extends Component {

  state = {
    cardImages: [ 
      {one}, {two}, {three}, {four}, {five}, {six}, {seven}, {eight}, {nine} 
    ]
  }


  render() {
    return (

      <div className="App">
        <Header />

        <GameBoard img={this.state.cardImages}/>
        <Footer />
      </div>
    );
  }
}

export default App;
