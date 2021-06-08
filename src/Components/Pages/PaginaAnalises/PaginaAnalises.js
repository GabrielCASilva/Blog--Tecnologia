import React,{useState, useEffect} from 'react'

import {Container, Row} from 'react-bootstrap'

import SubMenu from '../../Conteudo/SubMenu/SubMenu'
import Posts from '../../Conteudo/Posts/Posts'

import getPostsAnalises from '../../../utils/getPostsAnalises'

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
                <Row xs={1} md={4} lg={3}
                    className="row"
                >
                    {postAnaliseMap()}
                </Row>
            </Container>
        </>
    )
}

export default PaginaAnalises