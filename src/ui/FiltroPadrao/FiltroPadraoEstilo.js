import { makeStyles } from "@material-ui/core"

import { useStorage } from "../../services/contextos/StorageContexto"

export const useEstiloFiltroPadrao = _ => {
    const { modulo } = useStorage()

    const useEstilo = makeStyles((tema) => ({
        conteudo: {
            padding: "0px 20px 0",
            marginBottom: 20,
            border: 'solid 1px',
            borderRadius: 5,
            borderColor: `${(modulo ? tema.palette.modulo[modulo].principal : tema.palette.modulo.default.principal)} !important`,
        }
    }))

    return useEstilo()
}
