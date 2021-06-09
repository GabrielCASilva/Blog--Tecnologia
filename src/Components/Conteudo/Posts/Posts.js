import React, {useContext} from 'react'
import './Posts.css'

import {Col, Card, Button} from 'react-bootstrap'

import TemaContext from '../../../contexts/TemaContext'

const CardPost = ({postagem, texto, atualizacao, imagem}) => {
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
                        <Button variant={tema.botaoVariant}>Leia Mais</Button>
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

const Posts = ({titulo, corpoTexto, atualizacao, imagem}) => {
    return (
        <>      
            <CardPost
                imagem={imagem}
                postagem={titulo}
                texto={corpoTexto}
                atualizacao={atualizacao}
            />
        </>
    )
}

export default Posts