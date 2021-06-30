import React, {useState} from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import salvarNovaCategoria from '../../../utils/salvarNovaCategoria'
import { useHistory } from 'react-router-dom'

const PaginaNovaCategoria = ({getCategorias}) => {

    const history = useHistory()

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
            
            <Form onSubmit={ (e) => incluirNovaCategoria(e)}>
                <Form.Group as={Col}>
                    <h2>Nova Categoria</h2>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label htmlFor='np-campo-nova-categoria'>Nome da categoria</Form.Label>
                    <Form.Control
                        id='np-campo-nova-categoria'
                        name='np-campo-nova-categoria'
                        value={novaCategoria}
                        onChange={e => setNovaCategoria(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Button
                        type="submit" 
                        className="my-1"
                    >Salvar</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default PaginaNovaCategoria