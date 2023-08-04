import { useStorage } from "../../services/contextos/StorageContexto"
import { useEstiloBarraBottom } from "./BarraBottomEstilo"

const BarraBottom = () => {
    const { nomeEmpresa } = useStorage()
    const classes = useEstiloBarraBottom()

    return (
        <>
            <div className={classes.content}>
                {nomeEmpresa.toUpperCase()}
                <div className={classes.creditos}>
                    LS Tecnologia
                </div>
            </div>
        </>
    )
}

export default BarraBottom