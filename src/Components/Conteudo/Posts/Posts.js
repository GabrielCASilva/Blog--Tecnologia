import React, {useContext, useState} from 'react'
import './Posts.css'

import {Col, Card, Button} from 'react-bootstrap'

import TemaContext from '../../../contexts/TemaContext'
import removerPostServico from '../../../utils/removerPostServico'
import { Link } from 'react-router-dom'

const CardPost = ({postagem, texto, atualizacao, imagem, PostId}) => {

    const [postRemovido, setpostRemovido] = useState(false)

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
                        <Card.Title>{postagem}</Card.Title>
                        <Card.Text>
                            {texto.slice(0,168)}...
                        </Card.Text>
                                <Link to={`/pagina-post/${PostId}`}>
                                    <Button variant={tema.botaoVariant}>Leia Mais</Button>
                                </Link>
                                
                        
                    </Card.Body>
                    
                    <Card.Footer>
                        <small className="text-muted">
                            {atualizacao}
                        </small>
                    </Card.Footer>
                </Card>
            </Col>
            }
        </>
    )
}

const Posts = ({titulo, corpoTexto, atualizacao, imagem, id}) => {
    return (
        <>      
            <CardPost
                imagem={imagem}
                postagem={titulo}
                texto={corpoTexto}
                atualizacao={atualizacao}
                PostId={id}
            />
        </>
    )
}

export default Posts