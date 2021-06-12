import React, {useContext} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Image} from 'react-bootstrap'
import {TEMA_ESCURO, TEMA_CLARO} from '../../../utils/estilosTema'

import './Header.css'

import TemaContext from '../../../contexts/TemaContext'

const Header = ({funcaoConfiguraTema}) => {

    const tema = useContext(TemaContext)

    return (
        <>
            <div 
                className="box-perfil-content"
                style={{
                    'backgroundColor' : tema.bg
                }}
            >
                <Navbar collapseOnSelect  bg={tema.objbg} variant={tema.objVariant}>
                    <LinkContainer to="/perfil">
                        <Nav.Link>
                                <Image
                                    style={{
                                        'width':'50px'
                                    }}
                                    src="http://www.rachegebran.com.br/wp-content/uploads/perfil.jpg" 
                                    rounded
                                />

                        </Nav.Link>
                    </LinkContainer>
                </Navbar>
            </div>

            <Navbar collapseOnSelect  bg={tema.objbg} variant={tema.objVariant} expand="lg" sticky="top">

                <LinkContainer to='/'>
                    <Navbar.Brand>Modelo Digital</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="mr-auto"
                    >
                        <NavDropdown 
                            title="Postagens"
                            id="collasible-nav-dropdown"
                        >

                            <LinkContainer to="./analises">
                                <NavDropdown.Item>Analises</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to="./noticias">
                                <NavDropdown.Item>Notícias</NavDropdown.Item>
                            </LinkContainer>
                            
                        </NavDropdown>

                        <LinkContainer to="./categorias">
                            <Nav.Link>Categorias</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to="./sobre">
                            <Nav.Link>Sobre</Nav.Link>
                        </LinkContainer>
                        

                        <Form.Check
                            className="btn-switch"
                            onClick={() => tema.nomeTema === TEMA_CLARO?
                                        funcaoConfiguraTema(TEMA_ESCURO):
                                        funcaoConfiguraTema(TEMA_CLARO)
                                    }
                            type="switch"
                            id="custom-switch"
                        />
                        
                    </Nav>

                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Pesquisa"
                            className="mr-2"
                            aria-label="Search"
                            style={{
                                'color': tema.fontColor,
                                'backgroundColor': tema.objbgColor
                            }}
                        />
                        <Button variant={tema.botaoVariant}>Pesquisa</Button>

                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header