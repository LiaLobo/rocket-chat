import React from 'react'
import Header from '../../componentes/Header'


//Criada uma função porque não terá interação copm o usuário na página inicial
function PaginaInicial() {
    return (
        <main>
            <Header
                classImg='home-header '
                heading='A era da comunicação intergalática!'
            />
        </main>
    )
}

export default PaginaInicial