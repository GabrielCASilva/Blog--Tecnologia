const getCategorias = setState => {

    const _listaCategorias = [
        {
            'id' : 1,
            'descricao' : 'Jogos'
        },
        {
            'id' : 2,
            'descricao' : 'Celulares'
        },
        {
            'id' : 3,
            'descricao' : 'Consoles'
        },
    ]

    const _listaCategoriasOrdenada = _listaCategorias.sort((a,b) => {
        return (a.descricao > b.descricao) ? 1 : -1
    })

    setState(_listaCategoriasOrdenada)
}

export default getCategorias