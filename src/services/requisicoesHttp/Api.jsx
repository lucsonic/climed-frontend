import axios from 'axios'
import { useStorage } from '../contextos/StorageContexto'
import { useModalContexto } from '../contextos/ModalContexto'
import React from 'react'

export const useApi = () => {
    const { token } = useStorage()
    const { setModal } = useModalContexto()

    const api = axios.create({
        baseURL: process.env.REACT_APP_URL_API
    })

    api.interceptors.request.use(config => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    })

    /**
     * Formata a lista de erros recebido da requisição.
     * 
     * @param {*} erros 
     * @returns 
     */
    const formataMensagens = erros => {
        let mensagens = []
        Object.keys(erros).forEach(item => mensagens.push(erros[item]))
        return (
            <React.Fragment>
                {mensagens.map(mensagem => mensagem.map(erro => <div>{erro}</div>))}
            </React.Fragment>
        )
    }

    /**
     * Caso o status da requisição seja diferente de 200. A 
     * modal padrão de apresentação de erro é chamada.
     */
    api.interceptors.response.use(response => {
        return response
    }, erro => {
        let erros = {}
        let errosServidor = erro?.response?.data?.error?.message

        if (erro?.response?.status === 500 || erro?.response?.status === 401) {
            erros = { erro: ['Erro no processamento, tente mais tarde!'] }
        } else if (erro?.response?.status === 404) {
            erros = { erro: ['Usuário não encontrado na base de dados!'] }
            setTimeout(() => {
                document.location.reload(true)
            }, 3000)

        } else {
            if (typeof errosServidor === "string") {
                erros = { erro: [errosServidor] }
            } else {
                erros = errosServidor
            }
        }

        if (!!erros) {
            setModal({
                titulo: `Erro`,
                mensagem: formataMensagens(erros)
            })
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