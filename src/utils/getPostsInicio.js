import instanciaAxios from '../config/http'

const getPostsInicio = async () => {
    const _listaPostsInicio = (await instanciaAxios.get("post")).data
    
    return _listaPostsInicio.sort((a,b) => new Date(b.dataPostagem) - new Date(a.dataPostagem))
}

export default getPostsInicio