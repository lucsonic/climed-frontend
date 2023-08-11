import { AppBar, Button, CircularProgress, Fade, Menu, MenuItem, Toolbar } from "@mui/material"
import { useRequisicoesLogin } from "../../services/requisicoesHttp/RequisicoesLogin"
import { useEstiloBarraTopo } from './BarraTopoEstilo'
import { useState } from "react"
import { AccountCircle } from "@mui/icons-material"
import { useStorage } from "../../services/contextos/StorageContexto"
import logo from '../../../src/img/logo.png'
import { Link } from "react-router-dom"
import BarraMenu from "../BarraMenu/BarraMenu"

const BarraTopo = () => {
    const { logout } = useRequisicoesLogin()
    const { nomeUsuario, codUsuario, token, ultimoAcesso, nomePerfil, nomeEmpresa, modulo } = useStorage()
    const classes = useEstiloBarraTopo()
    const [anchorEl, setAnchorEl] = useState(null)
    const [logoutState, setLogoutState] = useState(false)
    const open = Boolean(anchorEl);

    const logoutUser = async () => {
        setLogoutState(true)
        const dados = await logout()
        document.location.reload(true)
    }

    const handleSair = async () => {
        localStorage.clear()
        await logoutUser()
        localStorage.clear()
        handleClose()
        window.location.href = process.env.REACT_APP_LOGOUT_REDIRECT_URL;
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    return (
        token && (
            <AppBar position="static" color="inherit" classes={{ root: classes.appbarClass }}>
                <Toolbar>
                    <div className={classes.empresa}>
                        <Link to="/">
                            <img style={{ height: '80px', width: '100%' }} align={'left'} src={logo} />
                        </Link>
                    </div>
                    <BarraMenu />
                    <div className={classes.grow} />
                    <div className={classes.containerUsuario}>
                        <div className={classes.usuario}>
                            <Button
                                style={{ padding: 0, justifyContent: 'flex-start' }} p={3}
                                backgroundColor='red'
                                id="fade-button"
                                aria-controls="fade-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                disabled={logoutState}
                            >{logoutState ? (<CircularProgress size="1rem"></CircularProgress>)
                                : (<span style={{ fontSize: 13, textAlign: 'left' }}><b>{nomeUsuario}</b> {nomeUsuario && (<small style={{
                                    color: '#9e9e9e',
                                    margin: '0!important',
                                    padding: '0!important',
                                    alignItems: "left !important"
                                }}>({nomePerfil})</small>)} <AccountCircle /></span>)}
                            </Button>
                            <span style={{ fontSize: 12, textAlign: 'left' }}>ÚLTIMO ACESSO: <b>{ultimoAcesso}</b></span>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                                style={{ top: '45px' }}
                            >
                                {token && (
                                    <MenuItem style={{ width: '160px' }} onClick={handleSair}>Sair</MenuItem>)}
                            </Menu>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        )
    )
}

export default BarraTopo