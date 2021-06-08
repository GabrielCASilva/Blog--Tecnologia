import React, {useContext} from 'react'

import TemaContext from '../../../contexts/TemaContext'

const Footer = () => {
    const tema = useContext(TemaContext)

    return (
        <div style={{
            'backgroundColor': tema.bg,
            'width': '100%',
            'height': '50px',
            'textAlign' : 'center'
        }}>
            <p  style={{
                'color': tema.fontColor,
                'padding': '13px'
            }}> Copyright &copy; Gabriel</p>
        </div>
    )
}

export default Footer