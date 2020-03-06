import React from 'react';
// import ReactDOM from 'react-dom';
import GameBoard from './GameBoard.jsx';
import { ajax } from 'jquery;'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: true,
      playerTwo: false,
      win: false
    }
  }

  componentDidMount() {
    ajax({
      type: "GET",
      url: "/playConnect",
      dataType: 'json',
      success: console.log("success"),
      error: e => console.log(e),
    })
  }

  render() {
   return  (

   <div>Hello React!!!

   <GameBoard />
   </div>
   )}
}


export default App;