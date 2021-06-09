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
            'id' : 2,
            'descricao' : 'Consoles'
        },
    ]

    setState(_listaCategorias)
}

export default getCategorias