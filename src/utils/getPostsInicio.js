import instanciaAxios from '../config/http'

const getPostsInicio = async () => {
    const _listaPostsInicio = (await instanciaAxios.get("post")).data
    
    return _listaPostsInicio
}

export default getPostsInicio