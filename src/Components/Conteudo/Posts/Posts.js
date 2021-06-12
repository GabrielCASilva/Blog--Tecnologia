import React, {useContext} from 'react'
import './Posts.css'

import {Col, Card, Button} from 'react-bootstrap'

import TemaContext from '../../../contexts/TemaContext'
import { Link } from 'react-router-dom'

const CardPost = ({postagem, texto, atualizacao, imagem, PostId}) => {

    const tema = useContext(TemaContext)

    return (
        <>
            <Col className="col">                
                <Card className="p-2" bg={tema.objVariant} text={tema.objFontVariant}>
                    <Card.Img 
                        variant= "top"
                        alt="img"
                        src={imagem}
                    />
                    <Card.Body>
                        <Card.Title>{postagem}</Card.Title>
                        <Card.Text>
                            {texto}
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