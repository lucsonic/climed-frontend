import { makeStyles } from "@material-ui/core"

import { useStorage } from "../../services/contextos/StorageContexto"

export const useEstiloTabelaDados = _ => {
    const { modulo } = useStorage()
    const useEstilo = makeStyles((tema) => ({
        corLinha: {
            backgroundColor: modulo ? tema.palette.modulo[modulo].alfa10 : tema.palette.modulo.default.alfa10
        },
        semDados: {
            display: "flex",
            justifyContent: "center",
            color: tema.palette.font.dark
        }
    }))

    return useEstilo()
}
