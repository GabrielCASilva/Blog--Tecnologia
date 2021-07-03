import instanciaAxios from '../config/http'

const pegarCategoriaPeloId = async ( id ) => {
    try{
        const resposta = await instanciaAxios.get(`categoria/${id}`)
        return resposta.data.detalhes
    }catch(e){
        console.log('Hoube algum erro.')
    }
    
}

export default pegarCategoriaPeloId