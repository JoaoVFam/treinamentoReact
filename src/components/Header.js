import React, { Component } from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            titulo: 'Meu Header',
            subtitulo: 'Subtitulo'
        }
    }
    
    alterarTitulo = () => {
        if(this.state.titulo == 'Meu Header') {
            this.setState({
                titulo: 'Novo Título!'
            })
        } else {
            this.setState({
                titulo: 'Meu Header'
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.titulo}</h1>
                <h3>{this.state.subtitulo}</h3>

                <button onClick={this.alterarTitulo} >Alterar Título</button>
            </div>
        )
    }
}

export default Header;