import React,{useContext} from 'react'
import {Button} from 'react-bootstrap'

import TemaContext from '../../../contexts/TemaContext'

import './SubMenu.css'

const SubMenu = () => {
    const tema = useContext(TemaContext)
    return (
        <div 
            className="btn-pos"
            style={{
                'backgroundColor': tema.bg
            }}
        >
            <Button variant={tema.botaoVariant} >Novo tópico</Button>
        </div>
    )
}

export default SubMenu