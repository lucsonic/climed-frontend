import React from "react"

import { Button } from "@material-ui/core"
import { useEstiloSubmit } from "./BotaoPadraoEstilo"

const BotaoPadrao = props => {
    const { preenchido } = props
    const { botao } = useEstiloSubmit(preenchido)
    return (
        <Button
            {...props}
            className={botao}>
            {props.children}
        </Button>
    )
}
export default BotaoPadrao