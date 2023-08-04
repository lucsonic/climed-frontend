import React, { useContext, useReducer } from "react"
import {
    StorageReducer,
    estadoInicial,
    SET_NOME_USUARIO,
    SET_COD_USUARIO,
    SET_NOME_PERFIL,
    SET_TOKEN,
    SET_ULTIMO_ACESSO,
    SET_NOME_EMPRESA,
    SET_MODULO
} from "./reducers/StorageReducer"

const StorageContexto = React.createContext()

export default function StorageProvider({ children }) {
    const [state, dispatch] = useReducer(StorageReducer, estadoInicial)
    console.log('storage', state)
    return (
        <StorageContexto.Provider value={{
            nomeUsuario: state.nome_usuario,
            alteraNomeUsuario: nomeUsuario => dispatch({ type: SET_NOME_USUARIO, payload: nomeUsuario }),
            codUsuario: state.cod_usuario,
            alteraCodUsuario: codUsuario => dispatch({ type: SET_COD_USUARIO, payload: codUsuario }),
            nomePerfil: state.nome_perfil,
            alteraNomePerfil: nomePerfil => dispatch({ type: SET_NOME_PERFIL, payload: nomePerfil }),
            token: state.token_jwt,
            alteraToken: token => dispatch({ type: SET_TOKEN, payload: token }),
            ultimoAcesso: state.ultimo_acesso,
            alteraUltimoAcesso: ultimo_acesso => dispatch({ type: SET_ULTIMO_ACESSO, payload: ultimo_acesso }),
            nomeEmpresa: state.nome_empresa,
            alteraNomeEmpresa: nomeEmpresa => dispatch({ type: SET_NOME_EMPRESA, payload: nomeEmpresa }),
            modulo: state.modulo,
            alteraModulo: modulo => dispatch({ type: SET_MODULO, payload: modulo })
        }}>
            {children}
        </StorageContexto.Provider >
    )
}

export const useStorage = () => {
    const {
        nomeUsuario,
        alteraNomeUsuario,
        codUsuario,
        alteraCodUsuario,
        nomePerfil,
        alteraNomePerfil,
        token,
        alteraToken,
        ultimoAcesso,
        alteraUltimoAcesso,
        nomeEmpresa,
        alteraNomeEmpresa,
        modulo,
        alteraModulo
    } = useContext(StorageContexto)
    return {
        nomeUsuario,
        alteraNomeUsuario,
        codUsuario,
        alteraCodUsuario,
        nomePerfil,
        alteraNomePerfil,
        token,
        alteraToken,
        ultimoAcesso,
        alteraUltimoAcesso,
        nomeEmpresa,
        alteraNomeEmpresa,
        modulo,
        alteraModulo
    }
}