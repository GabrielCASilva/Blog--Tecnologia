import React, {useContext} from 'react'

import {Form, Button} from 'react-bootstrap'

import './Login.css'

import TemaContext from '../../../contexts/TemaContext'

const Login = () => {

    const tema = useContext(TemaContext)

    return (
        <Form 
            className="formulario-login"
            style={{
                'color': tema.fontColor,
                'backgroundColor': tema.bg
            }}
        >
            <h3>Entrar</h3>
            <Form.Group controlId="formBasicEmail">
                <Form.Label
                    style={{
                        'marginBottom': '15px'
                    }}
                >Endereço de E-mail</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Insira o E-mail"
                    style={{
                        'color': tema.fontColor,
                        'backgroundColor': tema.objbgColor,
                        'marginBottom': '30px'
                    }}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label
                    style={{
                        'marginBottom': '15px'
                    }}
                >Senha</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Senha"
                    style={{
                        'color': tema.fontColor,
                        'backgroundColor': tema.objbgColor,
                        'marginBottom': '30px'
                    }}
                />
            </Form.Group>
            <Button variant={tema.botaoVariant} type="submit">
                Entrar
            </Button>
        </Form>
    )
}

export default Login