import { makeStyles } from "@material-ui/core"

import { useStorage } from "../../services/contextos/StorageContexto"
import { useFiltroContexto } from "../../services/contextos/FiltroContexto"

export const useEstiloBotaoFiltro = _ => {
    const { modulo } = useStorage()
    const { filtroExpandido } = useFiltroContexto()

    const useEstilo = makeStyles((tema) => ({
        botaoFiltro: {
            display: "flex",
            justifyContent: filtroExpandido ? "space-between" : "flex-end",
            padding: 10,
            fontSize: 18,
            fontWeight: "bold",
            color: (modulo ? tema.palette.modulo[modulo].principal : tema.palette.modulo.default.principal),
            cursor: "pointer",
            borderColor: (modulo ? tema.palette.modulo[modulo].principal : tema.palette.modulo.default.principal),
            borderRight: filtroExpandido ? "1px solid" : 0,
        }
    }))
    return useEstilo()
}
