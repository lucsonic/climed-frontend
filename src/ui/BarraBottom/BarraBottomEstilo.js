import { makeStyles } from "@mui/styles"

export const useEstiloBarraBottom = _ => {
    const useEstilo = makeStyles((tema) => ({
        content: {
            width: '100%',
            position: "fixed",
            bottom: 0,
            color: 'black',
            justifyContent: 'center',
            backgroundColor: '#F3F6F9',
            fontSize: 12,
            paddingTop: 5,
            paddingBottom: 5,
            borderTop: "1px solid #D1D3E2",
            fontWeight: "bold"
        },
        creditos: {
            fontSize: 11,
            fontWeight: "normal"
        }
    }))

    return useEstilo()
}