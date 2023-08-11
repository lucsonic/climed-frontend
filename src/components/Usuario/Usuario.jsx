import React, { useState } from "react"
import { useRequisicoesUsuario } from "../../services/requisicoesHttp/RequisicoesUsuario"
import { DriveFileRenameOutline, PlaylistAdd } from "@mui/icons-material"
import CardFormulario from "../../ui/CardFormulario/CardFormulario"
import UsuarioFiltro from "./UsuarioFiltro"
import { LinearProgress, Typography } from "@material-ui/core"
import TabelaDados from "../../ui/TabelaDados/TabelaDados"
import { usePaginacao } from "../../services/hooksAuxiliares/paginacao"
import { useFuncoesAuxiliares } from "../../services/hooksAuxiliares/funcoesAuxiliares"
import { IconButton, Tooltip } from "@mui/material"

const Usuario = (props) => {
    const [usuarios, setUsuarios] = useState([])
    const [todosUsuarios, setTodosUsuarios] = useState([])
    const [loadingPage, setLoadingPage] = useState(false)
    const { formataCPF, successAlert } = useFuncoesAuxiliares()
    const [loading, setLoading] = useState(false)

    const {
        setPagina,
        limite,
        totalDados,
        setTotalDados,
        alteraPagina,
    } = usePaginacao(setUsuarios, todosUsuarios)

    const { listarUsuarios, ativarUsuario, inativarUsuario, editarUsuario } = useRequisicoesUsuario()

    const handleActivate = async (id) => {
        setLoading(true)
        const resp = await ativarUsuario(id)
        setLoading(false)
        successAlert('Usuário ativado com sucesso!')

        setTimeout(
            () => {
                window.location.href = "/usuario"
            }, 2000
        )
    }

    const handleInactivate = async (id) => {
        setLoading(true)
        const resp = await inativarUsuario(id)
        setLoading(false)
        successAlert('Usuário inativado com sucesso!')

        setTimeout(
            () => {
                window.location.href = "/usuario"
            }, 2000
        )
    }

    const handleEdit = async (id) => {
        setLoading(true)
        const resp = await editarUsuario(id)
        setLoading(false)

        window.location.href = `/usuario/editar/${id}`
    }

    const fetchUsuarios = async (busca, flg_ativo) => {
        setPagina(0)
        setLoadingPage(true)
        const { data } = await listarUsuarios({
            busca: busca,
            flg_ativo: flg_ativo
        })
        setLoadingPage(false)
        const dados = data
        setTotalDados(dados?.length)

        const usuariosResult = dados?.map((usuarioItem, idx) => {
            return {
                codUsuario: usuarioItem.cod_usuario,
                nome: usuarioItem.nom_usuario,
                cpf: formataCPF(usuarioItem.cpf_usuario),
                email: usuarioItem.dsc_email,
                perfil: usuarioItem.nom_perfil,
                status: parseInt(usuarioItem.flg_ativo) === 0 ? 'Inativo' : 'Ativo',
                opcoes: (
                    <React.Fragment>
                        <Tooltip title="Editar">
                            <IconButton onClick={() => handleEdit(usuarioItem?.cod_usuario)}>
                                <DriveFileRenameOutline style={{ marginRight: '10px' }} color="primary" />
                            </IconButton>
                        </Tooltip>

                        {parseInt(usuarioItem?.flg_ativo) === 1 ?
                            <Tooltip title="Desativar">
                                <IconButton onClick={() => handleInactivate(usuarioItem?.cod_usuario)}>
                                    <PlaylistAdd style={{ color: 'red', marginRight: '10px' }} />
                                </IconButton>
                            </Tooltip> :
                            <Tooltip title="Reativar">
                                <IconButton onClick={() => handleActivate(usuarioItem?.cod_usuario)}>
                                    <PlaylistAdd style={{ color: 'green', marginRight: '10px' }} />
                                </IconButton>
                            </Tooltip>
                        }
                    </React.Fragment>
                )
            }
        })

        setTodosUsuarios(usuariosResult || [])
    }

    return (
        <>
            <Typography variant="h5" align="left" style={{ paddingTop: 10, paddingBottom: 15, color: 'navy' }}>
                Lista de <strong>Usuários</strong>
            </Typography>
            <CardFormulario>
                <UsuarioFiltro filtroCallback={({ busca, flg_ativo }) => {
                    fetchUsuarios(busca, flg_ativo)
                }} />
                {loadingPage ? <LinearProgress /> : (
                    <TabelaDados
                        cabecalhos={
                            [
                                {
                                    chave: "codUsuario",
                                    titulo: "Código"
                                },
                                {
                                    chave: "nome",
                                    titulo: "Nome"
                                },
                                {
                                    chave: "cpf",
                                    titulo: "CPF"
                                },
                                {
                                    chave: "email",
                                    titulo: "Email"
                                },
                                {
                                    chave: "perfil",
                                    titulo: "Perfil"
                                },
                                {
                                    chave: "status",
                                    titulo: "Status"
                                }

                            ]}
                        linhas={usuarios}
                        limitePagina={limite}
                        totalLinhas={totalDados}
                        alteraPagina={alteraPagina}
                        todosDados={todosUsuarios}
                        setTodosDados={setTodosUsuarios}
                    />
                )}
            </CardFormulario>
        </>
    )
}

export default Usuario