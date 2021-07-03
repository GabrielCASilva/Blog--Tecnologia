import React,  {useEffect, useState} from 'react'

import { useParams } from 'react-router-dom'
import getDetalhesPost from '../../../utils/getDetalhesPost'
import formatarData from '../../../utils/formatarData'

import pegarCategoriaPeloId from '../../../utils/pegarCategoriaPeloId'

const PaginaPost = () => {

    const { id } = useParams()

    const [postCarregado, setPostCarregado] = useState([])
    const [nomeCategoria, setNomeCategoria] = useState('')

    useEffect(async () => {
        const _postCarregado = await getDetalhesPost(id)
        setPostCarregado( _postCarregado )

        const _categoria = await pegarCategoriaPeloId( _postCarregado.idCategoria )
        setNomeCategoria(_categoria.descricao)
    },[])

    if(postCarregado){
        return (
            <>
            <h3>{postCarregado.id}-{postCarregado.idTipoPostagem === 1 ? "NOTÍCIA" : "ANÁLISE"}: {postCarregado.titulo}</h3>
            <h5>
                {nomeCategoria} - {formatarData(postCarregado.dataPostagem)} -
                Autor: {postCarregado.autor ? postCarregado.autor : "Gabriel"}
            </h5>
            {postCarregado.imagem ? 
                postCarregado.imagem.includes('http') ? <img src={postCarregado.imagem}/>
                : null
            : null
            }
            
            <p>{postCarregado.descricao}</p>
            </>
        )
    }


    return (
        <>
        <p>Carregando...</p>
        </>
    )
}

export default PaginaPost