import { makeStyles } from "@mui/styles"

export const useEstiloTituloPagina = _ => {
    const useEstilo = makeStyles((tema) => ({
        root: {
            marginTop: 20,
            color: 'navy'
        }
    }))

    return useEstilo()
}
