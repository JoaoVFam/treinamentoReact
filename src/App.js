import React, { Component } from 'react';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header subtitulo="Semana Computação 2018" />
        <hr />
        <body>
            <p>Aqui seria o corpo da minha página</p>
        </body>
      </div>
    );
  }
}

export default App;