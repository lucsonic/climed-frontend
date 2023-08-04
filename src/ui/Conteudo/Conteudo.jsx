import { Outlet } from "react-router-dom"
import BarraTopo from "../BarraTopo/BarraTopo"
import PaginaPadrao from "../PaginaPadrao/PaginaPadrao"
import { useStorage } from "../../services/contextos/StorageContexto"
import BarraBottom from "../BarraBottom/BarraBottom"
import { useEstiloConteudo } from "./ConteudoEstilo"

const Conteudo = () => {
    const { token } = useStorage()
    const classes = useEstiloConteudo()

    return (
        <>
            {token && (
                <BarraTopo />
            )}

            <PaginaPadrao>
                <div className={classes.root}>
                    <Outlet />
                </div>
            </PaginaPadrao>

            {token && (
                <BarraBottom />
            )}
        </>
    )
}

export default Conteudo