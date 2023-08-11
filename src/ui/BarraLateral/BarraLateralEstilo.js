import { makeStyles } from "@material-ui/core"

export const useBarraLateralEstilo = _ => {
    const drawerWidth = 280

    const useEstilo = makeStyles(() => ({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            background: '#f2f2f2',
            color: '#000',
            "& svg": {
                color: '#000',
            },
            "& a": {
                textDecoration: "none",
                color: '#000',
            }
        },
        selected: {
            "&.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label": {
                backgroundColor: "rgb(57,57,57,0.5)"
            },
        }
    }))

    return useEstilo()
}