import React from 'react'

function Legenda (props) {
    return (
        //No HTML existe o atributo 'for' na tag <label>, porém no ambiente de desenvolvimento do JS/React essa é uma palavra reservada então não podemos usar o 'for'
        <label htmlFor={props.htmlFor}>
            {props.children}
        </label>
    )
}

export default Legenda 