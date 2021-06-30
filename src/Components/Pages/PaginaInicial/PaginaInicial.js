import React,{useState, useEffect} from 'react'

import {Container, Row, Carousel, Col} from 'react-bootstrap'

import MyCarousel from '../../Conteudo/MyCarousel/MyCarousel'
import Posts from '../../Conteudo/Posts/Posts'

import getPostsInicio from '../../../utils/getPostsInicio'
import Filters from '../../Conteudo/Filters/Filters'
import SubMenu from '../../Conteudo/SubMenu/SubMenu'

const PaginaInicial = () => {
    const [listaPostInicio, setListaPostInicio] = useState([])
    const [listaCarrosselInicio, setListaCarrosselInicio] = useState([])
    const [filtros, setFiltros] = useState([])

    useEffect(async() => {
        const posts = await getPostsInicio()
        setListaPostInicio(posts)
        setListaCarrosselInicio(posts.slice(0,3))
    },[])

    const postInicioMap = () => {
        if(listaPostInicio.length > 0){
            let listaPost = listaPostInicio
            if(filtros.length > 0 && filtros.indexOf(0) === -1){
                listaPost = listaPost.filter(item => {
                    return filtros.indexOf(item.idCategoria) > -1
                })
            }
            
            return listaPost.map(item => {
                return (
                    <Posts
                        key={item.id}
                        id={item.id}
                        imagem={item.imagem}
                        titulo={item.titulo}
                        corpoTexto={item.descricao}
                        atualizacao={item.dataPostagem}
                    />
                )
            })
        }
    }

    const inicioCarrosselMap = () => {
        if(listaCarrosselInicio.length > 0){
            return listaCarrosselInicio.map(item => {
                return (
                    <Carousel.Item interval={3000}
                        key={item.id}
                    >
                        <MyCarousel
                            imagem={item.imagem}
                            titulo={item.titulo}
                            texto={item.descricao}
                        />
                    </Carousel.Item>
                )
            })
        }
    }

    const adicionarFiltro = (idCategoria) => {
        if(idCategoria === 0){
            setFiltros([idCategoria])
            return
        }
        let filtro = [...filtros]
        
        if(filtro.indexOf(0) === 0){
            filtro.splice(0,1)
        }

        let indexFiltro = filtros.indexOf(idCategoria)
        
        if(indexFiltro === -1){
            filtro.push(idCategoria)
            setFiltros(filtro)
        }else{
                    
            filtro.splice(indexFiltro, 1)
            setFiltros(filtro)
        }
    }

    return (
        <>
            <SubMenu/>
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
                        <Filters
                            adicionarFiltro={adicionarFiltro}
                            filtros={filtros}
                        />
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