import React from 'react'

import { useParams } from 'react-router-dom'

const PaginaPost = () => {

    const { id } = useParams()

    return (
        <>
            <h3>TESTE: PAGINA DO POST</h3>
            <h4>ID: {id}</h4>
        </>
    )
}

export default PaginaPost