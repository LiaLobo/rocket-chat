import React from 'react'
import Grupo from './Grupo'

class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: {
                valor: '',
                erro: ''
            },

            email: {
                valor: '',
                erro: ''
            },

            pais: {
                valor: '',
                erro: ''
            },

            mensagem: {
                valor: '',
                erro: ''
            }
        }
    }

    handleChange = (nomeCampo, valorCampo, erroCampo = '') => {
        this.setState({
            [nomeCampo]: {
                valor: valorCampo,
                erro: erroCampo
            }
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className='pagina'>
                <h2>Entre em contato conosco!</h2>
                <form className='formulario'>
                    <Grupo erro={this.state.nome.erro}>
                        <Grupo.Legenda htmlFor='nome'> Nome Completo: </Grupo.Legenda>
                        <Grupo.CaixaTexto
                            name='nome'
                            placeholder='Digite seu nome completo'
                            onChange={this.handleChange}
                            minLength={10}
                            required
                            type='text'
                        />
                    </Grupo>
                    
                    <Grupo erro={this.state.email.erro}>
                        <Grupo.Legenda htmlFor='email'> Email: </Grupo.Legenda>
                        <Grupo.CaixaTexto
                            name='email'
                            placeholder='Digite seu email'
                            onChange={this.handleChange}
                            required
                            type='email'
                        />
                    </Grupo>

                    <Grupo erro={this.state.pais.erro}>
                        <Grupo.Legenda htmlFor='pais'> País: </Grupo.Legenda>
                        <Grupo.CaixaTexto
                            name='pais'
                            placeholder='Digite seu país'
                            onChange={this.handleChange}
                            required
                            type='text'
                        />
                    </Grupo>

                    <Grupo erro={this.state.mensagem.erro}>
                        <Grupo.Legenda htmlFor='mensagem'> Mensagem: </Grupo.Legenda>
                        <Grupo.CaixaTexto
                            name='mensagem'
                            placeholder='Deixe seu comentário'
                            onChange={this.handleChange}
                            required
                            type='text'
                        />
                    </Grupo>
                </form>
            </div>
        )
    }
}

            // <CaixaTexto 
            //     name='nome'
            //     placeholder='Digite seu nome completo'
            //     onChange={this.handleChange}
            // />

            // <CaixaTexto 
            //     name='email'
            //     placeholder='Digite seu email'
            //     onChange={this.handleChange}
            // />

            // <CaixaTexto 
            //     name='pais'
            //     placeholder='Digite seu país'
            //     onChange={this.handleChange}
            // />

            // <CaixaTexto 
            //     name='mensagem'
            //     placeholder='Deixe seu comentário'
            //     onChange={this.handleChange}
            // />

export default Formulario