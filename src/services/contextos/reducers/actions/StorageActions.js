// LocalStorage
const setItemStorage = (chave, valor) => localStorage.setItem(chave, valor)

const alteraEstado = (state, valor, chave) => {
    setItemStorage(chave, valor)
    return {
        ...state,
        [chave]: valor
    }
}

export const setNomeUsuario = (state, nomeUsuario, chave) => {
    return alteraEstado(state, nomeUsuario, chave)
}
export const setCodUsuario = (state, codUsuario, chave) => {
    return alteraEstado(state, codUsuario, chave)
}
export const setNomePerfil = (state, nomePerfil, chave) => {
    return alteraEstado(state, nomePerfil, chave)
}
export const setToken = (state, token, chave) => {
    return alteraEstado(state, token, chave)
}
export const setUltimoAcesso = (state, ultimo_acesso, chave) => {
    return alteraEstado(state, ultimo_acesso, chave)
}
export const setNomeEmpresa = (state, nome_empresa, chave) => {
    return alteraEstado(state, nome_empresa, chave)
}
export const setModulo = (state, modulo, chave) => {
    return alteraEstado(state, modulo, chave)
}