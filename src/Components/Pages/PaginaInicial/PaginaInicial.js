import React,{useState, useEffect} from 'react'

import {Container, Row, Carousel, Col} from 'react-bootstrap'

import MyCarousel from '../../Conteudo/MyCarousel/MyCarousel'
import Posts from '../../Conteudo/Posts/Posts'

import getPostsInicio from '../../../utils/getPostsInicio'
import getInicioCarrossel from '../../../utils/getInicioCarrossel'
import Filters from '../../Conteudo/Filters/Filters'

const PaginaInicial = () => {
    const [listaPostInicio, setListaPostInicio] = useState([])
    const [listaCarrosselInicio, setListaCarrosselInicio] = useState([])

    useEffect(() => {
        getPostsInicio(setListaPostInicio)
        getInicioCarrossel(setListaCarrosselInicio)
    },[])

    const postInicioMap = () => {
        if(listaPostInicio.length > 0){
            return listaPostInicio.map(item => {
                return (
                    <Posts
                        key={item.id}
                        id={item.id}
                        imagem={item.imagem}
                        titulo={item.titulo}
                        corpoTexto={item.texto}
                        atualizacao={item.atualizacao}
                    />
                )
            })
        }
    }

    const inicioCarrosselMap = () => {
        if(listaCarrosselInicio.length > 0){
            return listaCarrosselInicio.map(item => {
                return (
                    <Carousel.Item interval={3000}>
                        <MyCarousel
                            imagem={item.imagem}
                            titulo={item.titulo}
                            texto={item.texto}
                        />
                    </Carousel.Item>
                )
            })
        }
    }

    return (
        <>
            <Carousel>
                {inicioCarrosselMap()}
            </Carousel>
            
            <Container>
                <Row
                    style={{
                        'margin': '20px 0 0 0'
                    }}
                >
                    <Col md="auto">
                        <Filters/>
                    </Col>        
                </Row>
                <Row xs={1} md={4} lg={3}
                    className="row"
                    style={{
                        'marginBottom': '0'
                    }}
                >
                    {postInicioMap()}
                </Row>
            </Container>
            
        </>
    )
}

export default PaginaInicial