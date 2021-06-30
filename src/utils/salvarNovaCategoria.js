import instanciaAxios from '../config/http'

const salvarNovaCategoria = async novaCategoria => {
    try{
        const resposta = await instanciaAxios.post('categoria', novaCategoria)
        alert('A nova categoria foi cadastrada.')
        return resposta.data
        
    }catch(error){  

        switch(error.response.status){
            case 409:
                alert(error.response.data.message)
                break
            default:
                alert('Houve algum problema no cadastro da nova categoria')
                break
        }
    }
}

export default salvarNovaCategoria