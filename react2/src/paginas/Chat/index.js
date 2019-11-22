import React from 'react'
import { getMensagens } from '../../service/mensagens'
import Mensagens from './Mensagem/index'

import './styles.css'
import Mensagem from './Mensagem/index'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mensagens: ''
        }
    }

    componentDidMount() {
        getMensagens()
            .then(response => {
                this.setState({
                    mensagens: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        return (
            <section className='chat'>
                <h2>Mensagens</h2>
                {this.state.mensagens.length > 0
                ? this.state.mensagens.map(mensagem => {
                        //A mensagem com a letra maiuscula é o componente; a mensagem em verde é a props do componente mensagem; as outras mensagens são as propriedades dos objetos de dentro do json
                        return <Mensagem mensagem={mensagem} key={mensagem.id} />
                    })

                    : <span>Carregando mensagens ;)</span>
                }
            </section>
        )
    }
}

export default Chat