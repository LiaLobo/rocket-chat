import React from 'react'

import './styles.css'

export default function Postagem(props) {
    return (
        <div className='postagem'>
            <h3>{props.banana.title}</h3>
            <p>{props.banana.body}</p>
            <button className='botao'>Saiba Mais</button>
        </div>
    )
}