import instanciaAxios from '../config/http'

const removerPostServico = async id => {
    try{
        const resposta = (await instanciaAxios.delete(`post/${id}`)).data

        return {
            resposta,
            'sucesso': true,
            'mensagem': 'Post removido'
        }

    }
    catch(error){
        alert('Houve algum problema')
        return {
            'sucesso': false,
            'mensagem': 'Post removido'
        }
    }
}

export default removerPostServico