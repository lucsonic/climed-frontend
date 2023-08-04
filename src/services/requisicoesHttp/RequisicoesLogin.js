import { useApi } from "./Api"

export const useRequisicoesLogin = () => {
    const { api, tratarRequisicao } = useApi()

    const login = (credenciais) => {
        return tratarRequisicao(_ => api.post(`/auth/login`, credenciais))
    }

    const logout = () => {
        return tratarRequisicao(_ => api.post(`/auth/logout`))
    }

    return {
        login,
        logout
    }
}
