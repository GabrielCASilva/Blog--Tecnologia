import instanciaAxios from '../config/http'

const salvarNovoPost = async novoPost => {
    try{
        const resposta = await instanciaAxios.post('post', novoPost)
        return resposta.data
        
    }catch(error){
        alert('Houve algum problema no cadastro do novo Post')
    }
}

export default salvarNovoPost