const formatarData = dataOriginal => {
    if(dataOriginal){
        const dia = dataOriginal.substring(8, 10)
        const mes = dataOriginal.substring(5, 7)
        const ano = dataOriginal.substring(0, 4)
        return `${dia}/${mes}/${ano}`
    }else{
        return null
    }
    
}

export default formatarData
