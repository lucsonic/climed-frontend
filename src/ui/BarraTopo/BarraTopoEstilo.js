import { makeStyles } from "@mui/styles"
import { useStorage } from "../../services/contextos/StorageContexto"

export const useEstiloBarraTopo = _ => {

    const { token, nomePerfil, modulo } = useStorage()

    const useEstilo = makeStyles((tema) => ({
        grow: {
            flexGrow: 1,
        },
        appbarClass: {
            // ...tema.mixins.toolbar,
            width: 'auto',
            height: 80,
            position: "fixed",
            left: token && nomePerfil && modulo ? 280 : 0,
            top: 0,
            right: 0,
            justifyContent: 'center',
            backgroundColor: "#F3F6F9"
        },
        containerUsuario: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'left',
            color: "#D1D3E2"
        },
        usuario: {
            display: "grid",
            alignItems: "left",
            padding: "0 20px 0 20px",
            borderLeft: "1px solid #D1D3E2",
            marginLeft: 20,
            color: "#9496A3"
        },
        empresa: {
            display: "flex",
            alignItems: "left",
            padding: "0 15px 0 0px",
            borderRight: "1px solid #D1D3E2",
            marginLeft: 0,
            color: "#9496A3"
        },
        iconeClasse: {
            color: "#D1D3E2"
        }
    }))

    return useEstilo()
}
