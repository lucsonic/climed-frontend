import { makeStyles } from "@mui/styles"
import { useStorage } from "../../services/contextos/StorageContexto"

export const useEstiloMigalhaPagina = _ => {
    const { modulo } = useStorage()
    const useEstilo = makeStyles((tema) => ({
        root: {
            textTransform: "uppercase",
            "& a": {
                // color: modulo === 'default' ? tema.palette.modulo[modulo].alfa50 : tema.palette.modulo.default.alfa50,
                color: 'rgba(6, 137, 187, 0.5)',
                textDecoration: "none",
                "&.ativo": {
                    // color: modulo === 'default' ? tema.palette.modulo[modulo].principal : tema.palette.modulo.default.principal,
                    color: 'rgb(6,137,187)',
                },
                "&:hover": {
                    textDecoration: "none",
                },
            },
            paddingLeft: 20
        }
    }))
    return useEstilo()
}
