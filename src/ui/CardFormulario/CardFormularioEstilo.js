import { makeStyles } from "@mui/styles"
import { useStorage } from "../../services/contextos/StorageContexto"

export const useEstiloCardFormulario = () => {
    const { modulo } = useStorage()

    const useEstilo = makeStyles((tema) => ({
        root: {
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 10,
            color: modulo === 'default' ? '#c2c2c2' : '#f2f2f2',
            marginBottom: 10,
            border: 'solid 1px #c2c2c2'
        },
        headerTitulo: {
            fontSize: 20
        }
    }))
    return useEstilo()
}
