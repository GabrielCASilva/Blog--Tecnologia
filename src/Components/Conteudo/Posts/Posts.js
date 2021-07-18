import React, {useContext, useEffect, useState} from 'react'
import './Posts.css'

import {Col, Card, Button} from 'react-bootstrap'

import TemaContext from '../../../contexts/TemaContext'
import removerPostServico from '../../../utils/removerPostServico'
import pegarCategoriaPeloId from '../../../utils/pegarCategoriaPeloId'
import formatarData from '../../../utils/formatarData'
import { Link } from 'react-router-dom'

const CardPost = ({postagem, texto, atualizacao, imagem, idCategoria, PostId, idTipoPostagem}) => {

    const [postRemovido, setpostRemovido] = useState(false)
    const [nomeCategoria, setNomeCategoria] = useState('')

    useEffect(async ()=>{
        const categoria = await pegarCategoriaPeloId(idCategoria)
        setNomeCategoria(categoria ? categoria.descricao : null)
    },[])

    const tema = useContext(TemaContext)

    const removerPost = async () => {
        
        const resultado = await removerPostServico(PostId)

        if(resultado.sucesso){
            setpostRemovido(true)
            alert(resultado.mensagem)
            return false
        }
        alert(resultado.mensagem)
        setpostRemovido(false)
    }

    return (
        <>
        { postRemovido ? null :
            <Col className="col">       
                <Button 
                    onClick={ () => removerPost() }
                    variant="danger"
                    size="sm"
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '24px',
                        zIndex: '3'
                    }}
                >X</Button>

                <Card className="p-2" bg={tema.objVariant} text={tema.objFontVariant}>
                    <Card.Img 
                        variant= "top"
                        alt="img"
                        src={imagem}
                    />
                    <Card.Body>
                        <Card.Title>{idTipoPostagem === 1 ? "NOTÍCIA" : "ANÁLISE"}: {postagem}</Card.Title>
                        <Card.Text>
                            {nomeCategoria}
                        </Card.Text>
                        <Card.Text>
                            {texto.slice(0,168)}...
                        </Card.Text>
                                <Link to={`/pagina-post/${PostId}`}>
                                    <Button variant={tema.botaoVariant}>Leia Mais</Button>
                                </Link>
                                
                        
                    </Card.Body>
                    
                    <Card.Footer>
                        <small className="text-muted">
                            {atualizacao ? formatarData(atualizacao): null}
                        </small>
                    </Card.Footer>
                </Card>
            </Col>
            }
        </>
    )
}

const Posts = ({titulo, corpoTexto, atualizacao, imagem, id, idCategoria, idTipoPostagem}) => {
    return (
        <>      
            <CardPost
                imagem={imagem}
                postagem={titulo}
                texto={corpoTexto}
                atualizacao={atualizacao}
                PostId={id}
                idCategoria={idCategoria}
                idTipoPostagem={idTipoPostagem}
            />
        </>
    )
}

export default Posts