import React, {useState} from 'react'

const PaginaNovoPost = () => {

    const [formulario, setFormulario] = useState({})

    const handleChangeForm = (event) => {
        const { name, value } = event.target
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    const hendleSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <h2>Novo Post</h2>

            <form onSubmit={hendleSubmitForm}>
                <div>
                    <label>Titulo: </label>
                    <input
                        value={formulario.titulo || ''}
                        name="titulo"
                        onChange={(e)=>{handleChangeForm(e)}}
                    />
                </div>

                <div>
                    <label>Categoria: </label>
                    <select
                        value={formulario.categoria || ''}
                        name="categoria"
                        onChange={(e)=>{handleChangeForm(e)}}
                    >
                        <option>Casa</option>
                        <option>Trabalho</option>
                    </select>
                </div>

                <button type="submit">enviar</button>
            </form>
        </>
    )
}

export default PaginaNovoPost