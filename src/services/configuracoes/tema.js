import { createTheme } from '@material-ui/core/styles'

const tema = createTheme({
    palette: {
        primary: {
            main: "rgba(57,57,57)",
        },
        secondary: {
            main: "rgba(57,57,57,0.5)",
        },
        limpar: {
            main: "rgba(57,57,57,0.4)",
        },
        modulo: {
            default: {
                principal: "rgb(6,137,187)",
                alfa10: "rgba(6,137,187,0.1)",
                alfa50: "rgba(6,137,187,0.5)",
            },
        },
        font: {
            dark: "#9C9EAA",
            light: '#ffffff',
        },
        background: {
            default: '#F8F9FC',
        },
    }
})

export default tema
