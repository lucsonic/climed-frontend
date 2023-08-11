import React from "react"
import { useEstiloFiltroPadrao } from "./FiltroPadraoEstilo"

const FiltroPadrao = ({ children }) => {
    const { conteudo } = useEstiloFiltroPadrao()

    return (
        <React.Fragment>
            <div className={conteudo}>
                {children}
            </div>
        </React.Fragment>
    )

}
export default FiltroPadrao