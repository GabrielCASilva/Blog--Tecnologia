import React,{useContext} from 'react'
import {Button, Spinner} from 'react-bootstrap'

import TemaContext from '../../../contexts/TemaContext'

const PaginaCategorias = ({lista}) => {

    const tema = useContext(TemaContext)

    return (
        <>
            <h3
                style={{
                    'color':tema.fontColor
                }}
            >Lista Categorias</h3>
            <Button
                variant="outline-success"
            >Nova Categoria</Button>
            <ul>
                { lista ? lista.map(item => {
                    return(
                        <li 
                            key={item.id}
                            style={{
                                'color':tema.fontColor
                            }}
                        >
                            {item.descricao}
                            <Button 
                                style={{
                                    'marginLeft': '10px'
                                }}
                                variant="outline-danger"
                            >Remover</Button>
                        </li>
                    )
                    
                } ) : <Spinner animation="border" />
                }
            </ul>
        </>
    )
}

export default PaginaCategorias