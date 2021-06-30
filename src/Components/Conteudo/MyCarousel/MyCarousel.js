import React from 'react'

import {Carousel} from 'react-bootstrap'

const MyCarousel = ({titulo, texto, imagem}) => {
    return(
        <>
            <img
                style={{'maxHeight':"600px"}}
                className="d-block w-100"
                src={imagem}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>{titulo}</h3>
                <p>{`${texto.slice(0,201)}...`}</p>
            </Carousel.Caption>
        </>
    )
}

export default MyCarousel