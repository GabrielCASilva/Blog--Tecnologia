import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Header from '../../Conteudo/Header/Header'
import Footer from '../../Conteudo/Footer/Footer'

import PaginaInicial from '../PaginaInicial/PaginaInicial'
import PaginaCategorias from '../PaginaCategorias/PaginaCategorias'
import PaginaAnalises from '../PaginaAnalises/PaginaAnalises'
import PaginaNoticias from '../PaginaNoticias/PaginaNoticias'
import PaginaSobre from '../PaginaSobre/PaginaSobre'
import PaginaPerfil from '../PaginaPerfil/PaginaPerfil'

import TemaContext from '../../../contexts/TemaContext'

import{
    TEMA_CLARO,
    TEMA_ESCURO,
    TEMA_CLARO_CONFIG,
    TEMA_ESCURO_CONFIG
} from '../../../utils/estilosTema'

import getCategorias from '../../../utils/getCategorias'
import PaginaLogin from '../PaginaLogin/PaginaLogin'
import PaginaPost from '../PaginaPost/PaginaPost'

const PaginaRotas = () => {

    const [tema, setTema] = useState(TEMA_CLARO_CONFIG)
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        getCategorias(setCategorias)
    },[])

    const modificarTema = temaSelecionado => {

        switch( temaSelecionado ){
            case TEMA_CLARO:
                setTema(TEMA_CLARO_CONFIG)
                break
            
            case TEMA_ESCURO:
                setTema(TEMA_ESCURO_CONFIG)
                break

            default:
                setTema(TEMA_CLARO_CONFIG)
        }
    } 

    return (
        <TemaContext.Provider value={ tema }>

            <BrowserRouter>
                <div style={{'backgroundColor': tema.corFundoTema, 'minHeight': '94.6vh'}}>
                    <Header funcaoConfiguraTema={ modificarTema }/>
                    
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/inicio"/>
                        </Route>

                        <Route path="/inicio">
                            <PaginaInicial/>
                        </Route>

                        <Route path="/analises">
                            <PaginaAnalises/>
                        </Route>

                        <Route path="/noticias">
                            <PaginaNoticias/>
                        </Route>
                        
                        <Route path="/categorias">
                            <PaginaCategorias lista={categorias}/>
                        </Route>
                        
                        <Route path="/sobre">
                            <PaginaSobre/>
                        </Route>

                        <Route path="/perfil">
                            <PaginaPerfil/>
                        </Route>

                        <Route path="/admin">
                            <PaginaLogin/>
                        </Route>

                        <Route path="/pagina-post/:id">
                            <PaginaPost/>
                        </Route>

                    </Switch>

                    
                </div>
                <Footer/>
            </BrowserRouter>

        </TemaContext.Provider>
    )
}

export default PaginaRotas