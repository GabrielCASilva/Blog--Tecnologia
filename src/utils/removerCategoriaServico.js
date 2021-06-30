import instanciaAxios from '../config/http'

const removerCategoriaServico = async id => {
    try{
        const resposta = (await instanciaAxios.delete(`categoria/${id}`)).data

        return {
            resposta,
            'sucesso': true,
            'mensagem': 'categoria removido'
        }

    }
    catch(error){
        alert('Houve algum problema')
        return {
            'sucesso': false,
            'mensagem': 'categoria não removida'
        }
    }
}

export default removerCategoriaServico