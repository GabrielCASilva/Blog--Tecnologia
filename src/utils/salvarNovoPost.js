import instanciaAxios from '../config/http'

const salvarNovoPost = async novoPost => {
    try{
        const resposta = await instanciaAxios.post('post', novoPost)
        alert('O novo post foi cadastrado.')
        return resposta.data
        
    }catch(error){  

        switch(error.response.status){
            case 409:
                alert(error.response.data.message)
                break
            default:
                alert('Houve algum problema no cadastro do novo Post')
                break
        }
    }
}

export default salvarNovoPost