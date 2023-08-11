import { makeStyles } from "@material-ui/core"
import { useStorage } from "../../services/contextos/StorageContexto"

export const useEstiloModal = _ => {
    const { modulo } = useStorage()

    const useEstilo = makeStyles((tema) => {

        return ({
            botao: {
                color: (modulo ? tema.palette.modulo[modulo].principal : tema.palette.modulo.default.principal),
                "&:hover": {
                    backgroundColor: "transparent"
                }
            },
            loadingEstilo: {
                padding: 50
            }
        })
    })

    return useEstilo()
}
