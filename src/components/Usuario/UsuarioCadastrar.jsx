import { FormControl, Grid, LinearProgress, TextField, Typography } from "@material-ui/core"
import CardFormulario from "../../ui/CardFormulario/CardFormulario"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import SelectBox from "../../ui/SelectBox/SelectBox"
import BotaoPadrao from "../../ui/BotaoPadrao/BotaoPadrao"
import { Reply, Save } from "@mui/icons-material"
import ReactInputMask from "react-input-mask"
import { useRequisicoesUsuario } from "../../services/requisicoesHttp/RequisicoesUsuario"
import { useFuncoesAuxiliares } from "../../services/hooksAuxiliares/funcoesAuxiliares"
import _ from "lodash"

const UsuarioCadastrar = (props) => {

    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const { cadastrarUsuario, editarUsuario, salvarEdicao } = useRequisicoesUsuario()
    const { successAlert, errorAlert } = useFuncoesAuxiliares()
    const [error, setError] = useState(false)

    const [filtro, setFiltro] = useState({
        cod_usuario: '',
        nom_usuario: '',
        sig_usuario: '',
        dsc_senha: '',
        dsc_email: '',
        flg_ativo: '',
        cpf_usuario: '',
        cod_perfil: '',
        num_token: '',
        flg_email_confirmado: ''
    });

    const handleChange = e => {
        setFiltro({
            ...filtro,
            [e.target.name]: e.target.value
        });
    }

    const handleSelect = (name, value) => {
        setFiltro({
            ...filtro,
            [name]: value
        });
    }

    const validaForm = () => {
        setError(false)

        if (_.isEmpty(filtro?.nom_usuario)) {
            setError(true)
            return false;
        }

        if (_.isEmpty(filtro?.dsc_senha)) {
            setError(true)
            return false;
        }

        if (_.isEmpty(filtro?.dsc_email)) {
            setError(true)
            return false;
        }

        if (_.isEmpty(filtro?.cod_perfil)) {
            setError(true)
            return false;
        }

        if (_.isEmpty(filtro?.cpf_usuario)) {
            setError(true)
            return false;
        }
    }

    const handleSave = async () => {
        validaForm()

        console.log('error', error);

        if (error !== true) {
            console.log('sem erro');
        } else {
            console.log('com erro');
        }

        // try {
        //     validaForm()
        //     if (error !== false) {
        //         setLoading(true)
        //         const resp = await cadastrarUsuario(filtro)
        //         setLoading(false)
        //         successAlert('Usuário cadastrado com sucesso!')

        //         setTimeout(
        //             () => {
        //                 window.location.href = "/usuario"
        //             }, 2000
        //         )
        //     }
        // } catch (e) {
        //     errorAlert('Atenção!', `Erro durante o processamento: ${e}`)
        // }
    }

    const handleSaveEdit = async () => {
        try {
            validaForm()
            if (error !== true) {
                setLoading(true)
                const resp = await salvarEdicao(filtro)
                setLoading(false)
                successAlert('Usuário alterado com sucesso!')

                setTimeout(
                    () => {
                        window.location.href = "/usuario"
                    }, 2000
                )
            }
        } catch (e) {
            errorAlert('Atenção!', `Erro durante o processamento: ${e}`)
        }
    }

    const handleBack = () => {
        return window.location.href = "/usuario"
    }

    const handleDadosEdicao = async () => {
        await editarUsuario(id).then(r => {
            let dadosUsuario = r.data;
            setLoading(false)
            setFiltro({
                cod_usuario: dadosUsuario?.cod_usuario,
                nom_usuario: dadosUsuario?.nom_usuario,
                sig_usuario: dadosUsuario?.sig_usuario,
                dsc_email: dadosUsuario?.dsc_email,
                flg_ativo: dadosUsuario?.flg_ativo,
                cpf_usuario: dadosUsuario?.cpf_usuario,
                cod_perfil: dadosUsuario?.cod_perfil,
                num_token: dadosUsuario?.num_token,
                flg_email_confirmado: dadosUsuario?.flg_email_confirmado
            })
        });
    }

    const handleSigla = () => {
        if (filtro.nom_usuario) {
            let arr = filtro.nom_usuario.split(' ')
            let sigla = arr[0] + '.' + arr[arr.length - 1]
            filtro.sig_usuario = sigla.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        }
    }

    useEffect(() => {
        if (id)
            handleDadosEdicao()
    }, [])

    return (
        id && loading ? (
            <LinearProgress />) : (
            <>
                <div className="mb-5 mt-0">
                    {id ? (
                        <Typography variant="h5" align="left" style={{ paddingTop: 10, paddingBottom: 15, color: 'navy' }}>Editar <strong>Usuário</strong></Typography>
                    ) : (
                        <Typography variant="h5" align="left" style={{ paddingTop: 10, paddingBottom: 15, color: 'navy' }}>Cadastrar <strong>Usuário</strong></Typography>
                    )}
                </div>
                <CardFormulario>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                label="Nome do usuário"
                                name="nom_usuario"
                                value={filtro?.nom_usuario}
                                resetForm
                                onChange={handleChange}
                                error={error && !filtro?.nom_usuario}
                                helperText={!filtro?.nom_usuario && 'O nome do usuário é obrigatório.'}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                fullWidth
                                label="Sigla"
                                name="sig_usuario"
                                value={filtro?.sig_usuario}
                                resetForm
                                onChange={handleChange}
                                disabled
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        {!id && (
                            <Grid item xs={2}>
                                <TextField
                                    fullWidth
                                    type="password"
                                    label="Senha"
                                    name="dsc_senha"
                                    value={filtro?.dsc_senha}
                                    resetForm
                                    onChange={handleChange}
                                    onKeyDown={handleSigla}
                                    error={error && !filtro?.dsc_senha}
                                    helperText={!filtro?.dsc_senha && 'A senha é obrigatória.'}
                                />
                            </Grid>
                        )}
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                label="E-mail"
                                name="dsc_email"
                                value={filtro?.dsc_email}
                                resetForm
                                onChange={handleChange}
                                error={error && !filtro?.dsc_email}
                                helperText={!filtro?.dsc_email && 'O email é obrigatório.'}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl fullWidth>
                                <SelectBox
                                    label='Perfil'
                                    url={'listar/perfis'}
                                    name="cod_perfil"
                                    id="cod_perfil"
                                    value={filtro?.cod_perfil}
                                    onChange={(e) => {
                                        handleSelect("cod_perfil", e.value)
                                    }}
                                    error={error && !filtro?.cod_perfil}
                                    helperText={!filtro?.cod_perfil && 'O perfil é obrigatório.'}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <ReactInputMask
                                mask="999.999.999-99"
                                maskChar=""
                                value={filtro?.cpf_usuario}
                                onChange={handleChange}
                            >
                                {() =>
                                    <TextField
                                        fullWidth
                                        label="CPF"
                                        name="cpf_usuario"
                                        autoComplete='off'
                                        error={error && !filtro?.cpf_usuario}
                                        helperText={!filtro?.cpf_usuario && 'O CPF é obrigatório.'}
                                    />
                                }
                            </ReactInputMask>
                        </Grid>
                    </Grid>
                </CardFormulario>
                <Grid container justify="flex-end" style={{ marginTop: 0 }}>
                    <BotaoPadrao type="button" onClick={handleBack}>
                        <Reply /><div>&nbsp;&nbsp;</div>Voltar
                    </BotaoPadrao>
                    {id ? (
                        <BotaoPadrao type="submit" onClick={handleSaveEdit} variant="contained">
                            <Save /><div>&nbsp;&nbsp;</div>Atualizar
                        </BotaoPadrao>
                    ) : (
                        <BotaoPadrao type="submit" onClick={handleSave} variant="contained">
                            <Save /><div>&nbsp;&nbsp;</div>Cadastrar
                        </BotaoPadrao>
                    )}
                </Grid>
            </>
        )
    )
}

export default UsuarioCadastrar