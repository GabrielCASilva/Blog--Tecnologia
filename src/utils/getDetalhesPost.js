import instanciaAxios from '../config/http'

const getDetalhesPost = async (id) => {

    try {
        const resposta = await instanciaAxios.get(`post/${id}`)
        return resposta.data.detalhes

    }catch(e){
        alert('Houve um problema')
    }
}

export default getDetalhesPost