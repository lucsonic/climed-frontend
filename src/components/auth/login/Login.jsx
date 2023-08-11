import { Alert, Button, Card, CardContent, CircularProgress, Grid, Paper, TextField } from "@mui/material"
import { useRequisicoesLogin } from "../../../services/requisicoesHttp/RequisicoesLogin"
import React, { useState } from "react"
import { useStorage } from "../../../services/contextos/StorageContexto"
import logo from '../../..//../src/img/logo.png'
import { useEstiloLogin } from "./LoginEstilo"

const Login = (props) => {
    const { login } = useRequisicoesLogin()
    const [loading, setLoading] = useState(false)
    const [usuario, setUsuario] = useState(null)
    const { alteraCodUsuario, alteraNomeUsuario, alteraToken, alteraUltimoAcesso, alteraNomePerfil, alteraNomeEmpresa, alteraModulo } = useStorage()
    const [dados, setDados] = useState({
        dsc_email: '',
        dsc_senha: ''
    })
    const classes = useEstiloLogin()
    const [erro, setErro] = useState('')

    const handleChange = e => {
        setDados({
            ...dados,
            [e.target.name]: e.target.value
        });
    }

    const handleLogin = async () => {
        setLoading(true)
        if (dados.dsc_email === '' || dados.dsc_senha === '') {
            setErro('Os campos "Email" e "Senha" são obrigatórios')
            setLoading(false);
            return
        }
        try {
            const { data } = await login(dados)
            if (data) {
                alteraToken(data.access_token)
                alteraCodUsuario(data.usuario.cod_usuario)
                alteraNomePerfil(data.usuario.perfil[0].nom_perfil)
                alteraNomeUsuario(data.usuario.nom_usuario)
                alteraUltimoAcesso(data.ultimo_acesso)
                alteraNomeEmpresa(data.nome_empresa)
                alteraModulo(data.modulo)
                setUsuario(data)
            }
        } catch (error) {
            setErro(error.response.data.error)
            setLoading(false);
        }
        setLoading(false);
    }

    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '25%' }}>
            <Card className={classes.content}>
                <CardContent>
                    <div style={{ paddingBottom: '20px' }}>
                        <img src={logo} />
                    </div>
                    {erro && (
                        <div style={{ paddingBottom: '20px' }}>
                            <Alert severity="error">{erro}</Alert>
                        </div>
                    )}
                    <Paper elevation={3}>
                        <Grid style={{ alignContent: 'center' }}>
                            <div style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                                <TextField
                                    type='text'
                                    label="Email"
                                    name='dsc_email'
                                    onChange={handleChange}
                                    value={dados?.usuario}
                                    variant="outlined"
                                    style={{ width: '90%' }}
                                />
                            </div>
                            <TextField
                                type='password'
                                label="Senha"
                                name='dsc_senha'
                                onChange={handleChange}
                                value={dados?.usuario}
                                variant="outlined"
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        handleLogin();
                                    }
                                }}
                                style={{ width: '90%' }}
                            />
                        </Grid>
                        {loading && (
                            <div style={{ paddingTop: 20 }}>
                                <CircularProgress />
                            </div>
                        )}
                        <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                            <Button variant="contained" color='primary' style={{ width: '90%' }} onClick={handleLogin}>Login</Button>
                        </div>
                    </Paper>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login;