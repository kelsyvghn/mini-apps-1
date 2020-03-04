import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                item: ''
            }
        }






        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Item:
                    <input type="text" item={this.state.item} onChange={this.handleChange} />

                  </label>
                  <input type="submit" value="submit" />
                </form>
            )
          }
        }

        console.log('Hi Kelsy!');

//since we're rendering everything from a single app, it should render here
ReactDOM.render( <App/> , document.getElementById("App"));