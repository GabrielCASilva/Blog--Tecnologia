import React,{useEffect, useState} from 'react'

import {Container, Row, Carousel, Col} from 'react-bootstrap'

import MyCarousel from '../../Conteudo/MyCarousel/MyCarousel'
import Posts from '../../Conteudo/Posts/Posts'
import SubMenu from '../../Conteudo/SubMenu/SubMenu'

import getPostsNoticias from '../../../utils/getPostsNoticias'
import getNoticiasCarrossel from '../../../utils/getNoticiasCarrossel'
import Filters from '../../Conteudo/Filters/Filters'

const PaginaNoticias = () => {
    const [listaPostNoticias, setListaPostNoticias] = useState([])
    const [listaCarrosselNoticias, setListaCarrosselNoticias] = useState([])

    useEffect(() => {
        getPostsNoticias(setListaPostNoticias)
        getNoticiasCarrossel(setListaCarrosselNoticias)
    },[])

    const postNoticiasMap = () => {
        if(listaPostNoticias.length > 0){
            return listaPostNoticias.map(item => {
                return(
                    <Posts 
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

    const noticiasCarrosselMap = () => {
        if(listaCarrosselNoticias.length > 0){
            return listaCarrosselNoticias.map(item => {
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
            <SubMenu/>
            <Carousel>
                {noticiasCarrosselMap()}
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
                    {postNoticiasMap()}
                </Row>        
            </Container>
            
        </>
    )
}

export default PaginaNoticias