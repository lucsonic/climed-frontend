import { makeStyles } from "@mui/styles"

export const useEstiloPaginaPadrao = _ => {
    const useEstilo = makeStyles((tema) => ({
        topoPagina: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            '& > *': {
                fontSize: '1.8rem'
            }
        }
    }))
    return useEstilo()
}