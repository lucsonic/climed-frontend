import React from "react"
import CardFormulario from "../../ui/CardFormulario/CardFormulario"
import { useEstiloHome } from "./HomeEstilo"

const Home = (props) => {
    const classes = useEstiloHome()

    return (
        <CardFormulario>
            <div className={classes.root}>HOME</div>
        </CardFormulario>
    )
}
export default Home