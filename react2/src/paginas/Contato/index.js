import React from 'react'
import Formulario from './Formulario/index'
import Sucesso from './Sucesso/index'

import './styles.css'

class Contato extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conteudo: 'formulario'
        }
    }

    handleMudaConteudo = (proximaPagina) => {
        this.setState({
            conteudo: proximaPagina
        })
    }

    render() {
        return (
            <section className='contato'>
                {//Aqui poreríamos usar o if ternário, mas assim existe a possibilidade de colocar diversas outras páginas como condição
                    this.state.conteudo === 'formulario' &&
                    <Formulario
                        mudaConteudo={this.handleMudaConteudo}
                    />
                }
                {
                    this.state.conteudo === 'sucesso' &&
                    <Sucesso
                        mudaConteudo={this.handleMudaConteudo}
                    />
                }
            </section>
        )
    }
}

export default Contato