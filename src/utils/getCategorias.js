const getCategorias = setState => {

    const _listaCategorias = [
        {
            "id" : 1,
            "descricao" : "Jogos"
        },
        {
            "id" : 2,
            "descricao" : "Mobile"
        },
        {
            "id" : 3,
            "descricao" : "Consoles"
        },
        {
            "id" : 4,
            "descricao" : "IA"
        },
        {
            "id" : 5,
            "descricao" : "Segurança"
        },
        {
            "id" : 6,
            "descricao" : "Cloud"
        },
        {
            "id" : 7,
            "descricao" : "Hardware"
        }
    ]

    const _listaCategoriasOrdenada = _listaCategorias.sort((a,b) => {
        return (a.descricao > b.descricao) ? 1 : -1
    })

    setState(_listaCategoriasOrdenada)
}

export default getCategorias