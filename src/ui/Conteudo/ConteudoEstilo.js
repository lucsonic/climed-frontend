import { makeStyles } from "@mui/styles"
export const useEstiloConteudo = _ => {
    const useEstilo = makeStyles((tema) => ({
        root: {
            paddingLeft: 20,
            paddingRight: 20
        }
    }))
    return useEstilo()
}