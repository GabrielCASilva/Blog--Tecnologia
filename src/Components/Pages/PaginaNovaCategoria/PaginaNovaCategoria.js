import React, {useState, useContext} from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import salvarNovaCategoria from '../../../utils/salvarNovaCategoria'
import { useHistory } from 'react-router-dom'
import TemaContext from '../../../contexts/TemaContext'

const PaginaNovaCategoria = ({getCategorias}) => {

    const history = useHistory()

    const tema = useContext(TemaContext)

    const [novaCategoria, setNovaCategoria] = useState('')

    const incluirNovaCategoria = async (e) => {

        e.preventDefault()

        if(!novaCategoria){
            alert('Por gentileza, preencha todos os campos.')
            return false
        }

        const nCategoria = {
            'categoria': novaCategoria
        }

        await salvarNovaCategoria(nCategoria)
        await getCategorias()
        history.push('/categorias')
    }

    return (
        <>
            
            <Form 
                onSubmit={ (e) => incluirNovaCategoria(e)}
                style={{
                    margin: '15px'
                }}
            >
                <Form.Group as={Col}>
                    <h2
                        style={{
                            'color':tema.fontColor,
                        }}>
                    Nova Categoria</h2>
                </Form.Group>

                <Form.Group as={Col}
                    style={{
                        width: '30%'
                    }}
                >
                    <Form.Label 
                        htmlFor='np-campo-nova-categoria'
                        style={{
                            'color':tema.fontColor
                        }}
                    >Nome da categoria</Form.Label>
                    <Form.Control
                        style={{
                            'color': tema.fontColor,
                            'backgroundColor': tema.objbgColor
                        }}
                        id='np-campo-nova-categoria'
                        name='np-campo-nova-categoria'
                        value={novaCategoria}
                        onChange={e => setNovaCategoria(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Button
                        variant="outline-success"
                        type="submit" 
                        className="my-1"
                    >Salvar</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default PaginaNovaCategoria