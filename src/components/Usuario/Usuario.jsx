import React from "react"
import CardFormulario from "../../ui/CardFormulario/CardFormulario"
import { useEstiloUsuario } from "./UsuarioEstilo"

const Usuario = (props) => {
    const classes = useEstiloUsuario()

    return (
        <CardFormulario>
            <div className={classes.root}>USUÁRIO</div>
        </CardFormulario>
    )
}
export default Usuario