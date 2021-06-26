import instanciaAxios from '../config/http'

const getCategorias = async () => {

    const _listaCategorias = (await instanciaAxios.get("categoria")).data

    const _listaCategoriasOrdenada = _listaCategorias.sort((a,b) => {
        return (a.descricao > b.descricao) ? 1 : -1
    })

    return _listaCategoriasOrdenada
}

export default getCategorias