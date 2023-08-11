import { makeStyles } from "@material-ui/core";
export const useEstiloIconeLink = tipoCor => {
    const useEstilo = makeStyles((tema) =>
    ({
        icone: {
            color: tipoCor ? tema.palette[tipoCor].dark : "rgba(0,0,0,0.87)",
            cursor: "pointer"
        },

    }))
    return useEstilo()
}