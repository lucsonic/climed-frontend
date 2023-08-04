import { makeStyles } from "@mui/styles"

export const useEstiloLogin = _ => {
    const useEstilo = makeStyles((tema) => ({
        content: {
            borderRadius: 30,
            color: '#f2f2f2',
            width: '100%',
            height: 'auto',
            border: '1px solid #068BAC',
            textAlign: 'center'
        }
    }))

    return useEstilo()
}