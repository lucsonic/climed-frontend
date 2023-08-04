import React from "react";
import { useEstiloPaginaPadrao } from "./PaginaPadraoEstilo"
import TituloPagina from "../TituloPagina/TituloPagina";
import MigalhaPagina from "../MigalhaPagina/MigalhaPagina";

const PaginaPadrao = props => {
    const { topoPagina } = useEstiloPaginaPadrao();
    const { titulo, botao, children } = props
    return (
        <React.Fragment>
            {/* <MigalhaPagina /> */}
            <div className={topoPagina}>
                <TituloPagina>{titulo}</TituloPagina>
                {botao}
            </div>
            {children}
        </React.Fragment>
    )
}

export default PaginaPadrao