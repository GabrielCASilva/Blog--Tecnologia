import React,{useContext} from 'react'
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
        <div style={{
            margin: '15px',
        }}
        >
            <div style={{
                display:'flex',
                justifyContent: 'space-between'
            }}>
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
            </div>
            
            <nav style={{
                margin: '15px',
            }}>
                <ul>
                    { lista ? lista.map(item => {
                        return(
                            <>
                            <li 
                                key={item.id}
                                style={{
                                    'color':tema.fontColor,
                                    margin: '20px 0',
                                    listStyleType: 'none'
                                }}
                            >
                                
                                <Button
                                    onClick={() => removerCategoria(item.id)}
                                    style={{
                                        'marginRight': '10px'
                                    }}
                                    variant="outline-danger"
                                >X</Button>
                                {item.descricao}
                            </li>
                            </>
                        )                   
                    } 
                    ) : <Spinner animation="border" /> }
                </ul>
            </nav>
        </div>
    )
}

export default PaginaCategorias