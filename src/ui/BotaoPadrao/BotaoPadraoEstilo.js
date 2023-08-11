import { makeStyles } from "@material-ui/core"
import { useStorage } from "../../services/contextos/StorageContexto"

export const useEstiloSubmit = (preenchido = true) => {
    const { modulo } = useStorage()

    const definirCorFonte = tema => {
        let corFonte = modulo ? tema.palette.modulo[modulo].principal : tema.palette.modulo.default.principal
        if (preenchido) {
            corFonte = "#fff"
        }
        return corFonte
    }

    const definirCorBG = tema => {
        let corFonte = "transparent"
        if (preenchido) {
            corFonte = modulo ? tema.palette.modulo[modulo].principal : tema.palette.modulo.default.principal
        }
        return corFonte
    }

    const useEstilo = makeStyles((tema) => ({
        botao: {
            color: definirCorFonte(tema),
            marginBottom: tema.spacing(1),
            marginTop: tema.spacing(3),
            marginLeft: tema.spacing(1),
            backgroundColor: definirCorBG(tema),
            "&:hover": {
                backgroundColor: definirCorBG(tema)
            }
        }
    }))
    return useEstilo()
}
