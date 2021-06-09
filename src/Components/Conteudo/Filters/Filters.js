import React, { useState, useEffect, useContext } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

import getCategorias from '../../../utils/getCategorias'

import TemaContext from '../../../contexts/TemaContext'

const Filters = () => {

    const [btnCategorias, setBtnCategorias] = useState([])
    const tema = useContext(TemaContext)

    useEffect(() => {
        getCategorias(setBtnCategorias)
    }, [])

    const btnCategoriasMap = () => {
        if(btnCategorias.length > 0){
            return btnCategorias.map(item => {
                return(
                    <>
                        <Button variant={tema.botaoVariant}>{item.descricao}</Button>
                    </>
                )
            })
        }
    }

    return (
        <ButtonGroup className="mb-2">
            <Button variant={tema.botaoVariant}>Todos</Button>
            {btnCategoriasMap()}
        </ButtonGroup>
    )
}

export default Filters