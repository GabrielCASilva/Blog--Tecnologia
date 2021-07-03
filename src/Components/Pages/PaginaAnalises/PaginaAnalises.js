import React,{useState, useEffect} from 'react'

import {Container, Row, Col} from 'react-bootstrap'

import Posts from '../../Conteudo/Posts/Posts'

import getPostsInicio from '../../../utils/getPostsInicio'
import Filters from '../../Conteudo/Filters/Filters'

const PaginaAnalises = () => {
    const [listaPostAnalise, setListaPostAnalise] = useState([])
    const [filtros, setFiltros] = useState([])

    useEffect(async () => {
        const post = await getPostsInicio()
        setListaPostAnalise(post)
    }, [])

    const postAnaliseMap = () => {
        if(listaPostAnalise.length > 0){
            let listaPost = listaPostAnalise
            if(filtros.length > 0 && filtros.indexOf(0) === -1){
                listaPost = listaPost.filter(item => {
                    return filtros.indexOf(item.idCategoria) > -1
                })
            }
            return listaPost.map(item =>{
                if(item.idTipoPostagem === 2){
                    return(
                        <Posts
                            key={item.id}
                            id={item.id}
                            imagem={item.imagem}
                            titulo={item.titulo}
                            corpoTexto={item.descricao}
                            atualizacao={item.dataPostagem}
                            idCategoria={item.idCategoria}
                        />
                    )
                }else{
                    return null
                }
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
                    {postAnaliseMap()}
                </Row>
            </Container>
        </>
    )
}

export default PaginaAnalises