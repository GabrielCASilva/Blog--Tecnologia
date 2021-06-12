import React,{useState, useEffect} from 'react'

import {Container, Row, Col} from 'react-bootstrap'

import SubMenu from '../../Conteudo/SubMenu/SubMenu'
import Posts from '../../Conteudo/Posts/Posts'

import getPostsAnalises from '../../../utils/getPostsAnalises'
import Filters from '../../Conteudo/Filters/Filters'

const PaginaAnalises = () => {
    const [listaPostAnalise, setListaPostAnalise] = useState([])

    useEffect(() => {
        getPostsAnalises(setListaPostAnalise)
    }, [])

    const postAnaliseMap = () => {
        if(listaPostAnalise.length > 0){
            return listaPostAnalise.map(item =>{
                return(
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

    return (
        <>
            <SubMenu/>
            <Container>
                <Row
                    style={{
                        'margin': '20px 0 0 0'
                    }}
                >
                    <Col md="auto">
                        {/* <Filters/> */}
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