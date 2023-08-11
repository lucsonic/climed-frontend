import { useApi } from "./Api"

export const useRequisicoesSelectBox = () => {
    const { api, tratarRequisicao } = useApi()


    const getOptions = (url) => {
        return tratarRequisicao(_ => api.get(url))
    }

    return {
        getOptions
    }
}
