import React from 'react'

function CaixaTexto (props) {

    function validaCampo (evento) {
        const { value, name } = evento.target

        if(props.required && value.trim() === '') {
            props.onChange(name,value, 'Campo obrigatório')
            return
        }

        if(props.minLength && value.length < props.minLength) {
            props.onChange(name, value, `Digite pelo menos ${props.minLength} caracteres`)
            return
        }

        const regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/
        if(props.type === 'email' && !regex.test(value)) {
            props.onChange(name, value, 'Digite um email válido')
            return
        }
        props.onChange(name,value)
    }
    
    return (
        <input 
            className='campo'
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            onChange={validaCampo}
        />
    )
}

export default CaixaTexto