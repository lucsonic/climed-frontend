import { makeStyles } from "@mui/styles"
export const useEstiloUsuario = _ => {
    const useEstilo = makeStyles((tema) => ({
        root: {
            display: 'flex',
            flexDirection: "row",
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#696969',
            backgroundColor: '#fff'
        },
        loadingComponents: {
            display: 'block',
            margin: 'auto'
        }
    }))
    return useEstilo()
}