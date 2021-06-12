import React, { useState, useEffect, useContext } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

import getCategorias from '../../../utils/getCategorias'

import TemaContext from '../../../contexts/TemaContext'

const Filters = ({adicionarFiltro, filtros}) => {

    const [btnCategorias, setBtnCategorias] = useState([])
    const tema = useContext(TemaContext)

    useEffect(() => {
        getCategorias(setBtnCategorias)
    }, [])

    const btnCategoriasMap = () => {
        if(btnCategorias.length > 0){
            return btnCategorias.map(item => {
                return(
                    <div key={item.id}>
                        <Button 
                            variant={filtros.indexOf(item.id) === -1? tema.botaoVariant : tema.botaoSelecionado}
                            onClick={() => {adicionarFiltro(item.id)}}
                        >{item.descricao}</Button>
                    </div>
                )
            })
        }
    }

    return (
        <ButtonGroup className="mb-2">
            <Button variant={filtros.indexOf(0) === -1? tema.botaoVariant : tema.botaoSelecionado}
                onClick={() => {adicionarFiltro(0)}}
            >Todos</Button>
            {btnCategoriasMap()}
        </ButtonGroup>
    )
}

export default Filters