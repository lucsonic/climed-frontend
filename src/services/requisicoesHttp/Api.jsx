import axios from 'axios'

export const useApi = () => {

    const api = axios.create({
        baseURL: process.env.REACT_APP_URL_API
    })

    /**
     * Caso o status da requisição seja diferente de 200. A 
     * modal padrão de apresentação de erro é chamada.
     */
    api.interceptors.response.use(response => {
        return response
    }, erro => {
        let erros = {}
        let errosServidor = erro?.response?.data?.error?.message

        if (erro?.response?.data?.erro?.error?.message?.cpf_usuario) {
            erros = { erro: [erro?.response?.data?.erro?.error?.message?.cpf_usuario] }
        } else if (erro?.response?.status === 500 || erro?.response?.status === 401) {
            erros = { erro: ['Erro no processamento, tente mais tarde!'] }
        } else {
            if (typeof errosServidor === "string") {
                erros = { erro: [errosServidor] }
            } else {
                erros = errosServidor
            }
        }

        return Promise.reject(erro)
    })

    /**
     * Trata a requisição efetuada.
     */
    const tratarRequisicao = requisicao => {
        return requisicao();
    }

    return {
        api,
        tratarRequisicao,
    }
}