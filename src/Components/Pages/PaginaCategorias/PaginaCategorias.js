import React,{useContext, useState} from 'react'
import {Button, Spinner} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import TemaContext from '../../../contexts/TemaContext'

import removerCategoriaServico from '../../../utils/removerCategoriaServico'

const PaginaCategorias = ({lista, getCategorias}) => {

    const tema = useContext(TemaContext)

    const removerCategoria = async (id) => {
        
        const resultado = await removerCategoriaServico(id)

        if(resultado.sucesso){
            alert(resultado.mensagem)
            getCategorias()
        }
    }

    return (
        <>
            <h3
                style={{
                    'color':tema.fontColor
                }}
            >Lista Categorias</h3>

            <Link to={`/nova-categoria`}>
                <Button
                    variant="outline-success"
                >Nova Categoria</Button>
            </Link>
            
            <ul>
                { lista ? lista.map(item => {
                    return(
                        <>
                        <li 
                            key={item.id}
                            style={{
                                'color':tema.fontColor
                            }}
                        >
                            {item.descricao}
                            <Button
                                onClick={() => removerCategoria(item.id)}
                                style={{
                                    'marginLeft': '10px'
                                }}
                                variant="outline-danger"
                            >Remover</Button>
                        </li>
                        </>
                    )                   
                } 
                ) : <Spinner animation="border" /> }
            </ul>
        </>
    )
}

export default PaginaCategorias