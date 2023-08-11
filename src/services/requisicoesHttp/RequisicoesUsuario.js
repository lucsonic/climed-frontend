import { useFuncoesAuxiliares } from "../hooksAuxiliares/funcoesAuxiliares"
import { useApi } from "./Api"

export const useRequisicoesUsuario = () => {
    const { api, tratarRequisicao } = useApi()
    const { gerarFiltro } = useFuncoesAuxiliares()

    const listarUsuarios = ({ busca, flg_ativo }) => {
        let filtro = []
        if (busca) {
            filtro.push(`busca=${busca}`)
        }
        if (flg_ativo) {
            filtro.push(`flg_ativo=${flg_ativo}`)
        }

        return tratarRequisicao(_ => api.get(`/usuario/listar${gerarFiltro(filtro)}`))
    }

    const cadastrarUsuario = form => {
        return tratarRequisicao(_ => api.post('/usuario/cadastrar', form))
    }

    const editarUsuario = id => {
        return tratarRequisicao(_ => api.get(`/usuario/editar/${id}`))

    }

    const salvarEdicao = form => {
        return tratarRequisicao(_ => api.post(`/usuario/alterar`, form))
    }

    const ativarUsuario = codUsuario => {
        return tratarRequisicao(_ => api.put(`/usuario/${codUsuario}/ativar`))
    }

    const inativarUsuario = codUsuario => {
        return tratarRequisicao(_ => api.put(`/usuario/${codUsuario}/inativar`))
    }

    return {
        listarUsuarios,
        cadastrarUsuario,
        editarUsuario,
        salvarEdicao,
        ativarUsuario,
        inativarUsuario
    }
}
