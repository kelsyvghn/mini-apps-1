import React from 'react';
// import ReactDOM from 'react-dom';
import GameBoard from './GameBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: true,
      playerTwo: false,
      win: false
    }
  }

  render() {
   return  (

   <div>Hello React!!!

   <GameBoard />
   </div>
   )}
}


export default App;