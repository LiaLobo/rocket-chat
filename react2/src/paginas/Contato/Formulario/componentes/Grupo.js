import React from 'react'
import Legenda from './Legenda'
import CaixaTexto from './CaixaTexto'

//Funciona como um componente auxiliar
function Grupo(props) {
    return (
        <div>
            {props.children}
            {props.erro && <p className='grupo__erro'>{props.erro}</p>}
        </div>
        //Se props.erro for verdadeiro ele irá renderizar o <p>
    )
}

Grupo.Legenda = Legenda
Grupo.CaixaTexto = CaixaTexto

export default Grupo