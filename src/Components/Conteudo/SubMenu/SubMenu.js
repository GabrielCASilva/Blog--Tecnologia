import React,{useContext} from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import TemaContext from '../../../contexts/TemaContext'

import './SubMenu.css'

const SubMenu = ({criacao}) => {
    const tema = useContext(TemaContext)
    return (
        <div 
            className="btn-pos"
            style={{
                'backgroundColor': tema.bg
            }}
        >
            <Link to={`/novo-post/${criacao}`}>
                <Button variant={tema.botaoVariant} >Novo tópico</Button>
            </Link>
        </div>
    )
}

export default SubMenu