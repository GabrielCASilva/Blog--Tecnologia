import React,{useEffect, useState} from 'react'

import {Container, Row, Carousel, Col} from 'react-bootstrap'

import MyCarousel from '../../Conteudo/MyCarousel/MyCarousel'
import Posts from '../../Conteudo/Posts/Posts'
import SubMenu from '../../Conteudo/SubMenu/SubMenu'

import getPostsInicio from '../../../utils/getPostsInicio'
import getNoticiasCarrossel from '../../../utils/getNoticiasCarrossel'
import Filters from '../../Conteudo/Filters/Filters'

const PaginaNoticias = () => {
    const [listaPostNoticias, setListaPostNoticias] = useState([])
    const [listaCarrosselNoticias, setListaCarrosselNoticias] = useState([])
    const [filtros, setFiltros] = useState([])

    useEffect(() => {
        getPostsInicio(setListaPostNoticias)
        getNoticiasCarrossel(setListaCarrosselNoticias)
    },[])

    const postNoticiasMap = () => {
        if(listaPostNoticias.length > 0){
            let listaPost = listaPostNoticias
            if(filtros.length > 0 && filtros.indexOf(0) === -1){
                listaPost = listaPost.filter(item => {
                    return filtros.indexOf(item.idCategoria) > -1
                })
            }
            return listaPost.map(item => {
                if(item.idTipoPostagem === 0){
                    return(
                        <Posts 
                            id={item.id}
                            imagem={item.imagem}
                            titulo={item.titulo}
                            corpoTexto={item.texto}
                            atualizacao={item.dataCriacao}
                        />
                    )
                }else{
                    return null
                }
            })
        }
    }

    const noticiasCarrosselMap = () => {
        if(listaCarrosselNoticias.length > 0){
            return listaCarrosselNoticias.map(item => {
                return (
                    <Carousel.Item 
                        interval={3000}
                        key={item.id}
                    >
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
                {noticiasCarrosselMap()}
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
                    {postNoticiasMap()}
                </Row>        
            </Container>
            
        </>
    )
}

export default PaginaNoticias