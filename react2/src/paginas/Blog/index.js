import React from 'react'
import Header from '../../componentes/Header'
import Postagem from './Postagem'
import { getPostagens } from '../../service/posts'

import './styles.css'

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            titulos: []
        }
    }

    componentDidMount() {
        getPostagens()
            .then(response =>  {
                this.setState({
                    titulos: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        return (
            <section>
                <Header 
                    classImg='blog-header'
                    heading='Blog'                
                />

                <React.Fragment>
                    {
                        this.state.titulos.length > 0
                        //titulo é um argumento; ele é um item do array porque chamamos o array titulos para usar o map
                        ? this.state.titulos.map(titulo => {
                        return <Postagem banana={titulo} key={titulo.id} />
                        //Podemos também usar o conceito spread que funcionaria assim:
                        //return <Postagem {...postagem} />
                        //Ele pega o objeto e passa ele como um elemento inteiro para o array
                        })

                        : <span>Carregando posts (: </span>
                    }
                </React.Fragment>
            </section>
        )
    }
}

export default Blog