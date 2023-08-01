import { useApi } from "./Api"

export const useRequisicoesLogin = () => {
    const { api, tratarRequisicao } = useApi()

    const login = (dadosLogin) => {
        return tratarRequisicao(_ => api.post(`/auth/login`, dadosLogin))
    }

    return {
        login
    }
}
