import {
    setNomeUsuario,
    setCodUsuario,
    setNomePerfil,
    setToken,
    setUltimoAcesso,
    setNomeEmpresa,
    setModulo
} from "./actions/StorageActions" // ações do contexto
var CryptoJS = require("crypto-js")

//Local Storage (navegador)
const getItemStorage = key => localStorage.getItem(key)

const NOME_USUARIO_KEY = "nome_usuario"
const COD_USUARIO_KEY = "cod_usuario"
const NOME_PERFIL_KEY = "nome_perfil"
const TOKEN_KEY = "token_jwt"
const ULTIMO_ACESSO_KEY = 'ultimo_acesso'
const NOME_EMPRESA_KEY = 'nome_empresa'
const MODULO_KEY = 'modulo'

export const estadoInicial = {
    [NOME_USUARIO_KEY]: getItemStorage(NOME_USUARIO_KEY) || "",
    [COD_USUARIO_KEY]: getItemStorage(COD_USUARIO_KEY) || "",
    [NOME_PERFIL_KEY]: getItemStorage(NOME_PERFIL_KEY) || "",
    [TOKEN_KEY]: getItemStorage(TOKEN_KEY) || "",
    [ULTIMO_ACESSO_KEY]: getItemStorage(ULTIMO_ACESSO_KEY) || "",
    [NOME_EMPRESA_KEY]: getItemStorage(NOME_EMPRESA_KEY) || "",
    [MODULO_KEY]: getItemStorage(MODULO_KEY) || ""
}

export const SET_NOME_USUARIO = "altera_nome_usuario"
export const SET_COD_USUARIO = "altera_cod_usuario"
export const SET_NOME_PERFIL = "altera_nome_perfil"
export const SET_TOKEN = "altera_token"
export const SET_ULTIMO_ACESSO = "altera_ultimo_acesso"
export const SET_NOME_EMPRESA = "altera_nome_empresa"
export const SET_MODULO = "altera_modulo"

export const StorageReducer = (state, action) => {
    switch (action.type) {
        case SET_NOME_USUARIO:
            return setNomeUsuario(state, action.payload, NOME_USUARIO_KEY)
        case SET_COD_USUARIO:
            return setCodUsuario(state, action.payload, COD_USUARIO_KEY)
        case SET_NOME_PERFIL:
            return setNomePerfil(state, action.payload, NOME_PERFIL_KEY)
        case SET_TOKEN:
            return setToken(state, action.payload, TOKEN_KEY)
        case SET_ULTIMO_ACESSO:
            return setUltimoAcesso(state, action.payload, ULTIMO_ACESSO_KEY)
        case SET_NOME_EMPRESA:
            return setNomeEmpresa(state, action.payload, NOME_EMPRESA_KEY)
        case SET_MODULO:
            return setModulo(state, action.payload, MODULO_KEY)
        default:
            return state
    }
}