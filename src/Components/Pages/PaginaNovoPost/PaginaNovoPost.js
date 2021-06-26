import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { Form, Button, Col, Row } from 'react-bootstrap'
import salvarNovoPost from '../../../utils/salvarNovoPost'

import './PaginaNovoPost.css'

const PaginaNovoPost = ({categorias}) => {

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState(-1)
    const [imagem, setImagem] = useState('')
    const [descricao, setDescricao] = useState('')

    const {criacao} = useParams()

    const incluirNovoPost = (e) => {

        //console.log('Form \'submitado\' ')

        e.preventDefault()

        if(
            !imagem ||
            !titulo ||
            !descricao ||
            !categoria
        ){
            alert('Por gentileza, preencha todos os campos.')
            return false
        }

        const hoje = new Date()

        const ano = hoje.getFullYear()
        const mes = hoje.getMonth()
        const dia = hoje.getDate()

        const mesFormatado = (mes + 1) < 10 ? "0" + String((mes + 1)) : (mes + 1)

        const novoPost = {
            'imagem': imagem,
            'titulo': titulo,
            'descricao': descricao,
            'idCategoria': categoria,
            'dataPostagem': `${ano}-${mesFormatado}-${dia}`
        }

        salvarNovoPost(novoPost)
    }

    return (
        <>
            
            <Form onSubmit={ (e) => incluirNovoPost(e)}>
                <Form.Group as={Col}>
                    <h2>Novo Post</h2>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label htmlFor='np-campo-titulo'>Titulo</Form.Label>
                    <Form.Control
                        id='np-campo-titulo'
                        name='np-campo-titulo'
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label
                        htmlFor='np-campo-categoria'
                    >Categoria</Form.Label>
                    <Form.Control 
                        as="select"
                        defaultValue="Selecione uma categoria"
                        id='np-campo-categoria'
                        name='np-campo-categoria'
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        
                        <option  value={ -1} disabled >Selecione uma categoria</option>

                        {categorias.map( item => {
                            return (
                            <option value={item.id} key={item.id}>
                                {item.descricao}
                            </option>
                            )
                        })}
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label htmlFor='np-campo-imagem'>Imagem</Form.Label>
                    <Form.Control
                        id='np-campo-imagem'
                        name='np-campo-imagem'
                        value={imagem}
                        onChange={e => setImagem(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label htmlFor='np-campo-descricao'>Descricao</Form.Label>
                    <Form.Control 
                        as="textarea"
                        id='np-campo-descricao'
                        name='np-campo-descricao'
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
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

export default PaginaNovoPost