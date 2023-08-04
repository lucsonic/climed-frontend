import React, { useContext, useReducer } from "react"
import {
    AppReducer,
    appInitialState,
    SET_TITULO_MODAL,
    SET_MENSAGEM_MODAL,
    TROCA_MODAL,
    SET_MODAL,
    SET_BOTOES_MODAL,
    SET_LARGURA_MODAL
} from "./reducers/ModalReducer"

const ModalContexto = React.createContext()
export default function ModalProvider({ children }) {
    const [state, dispatch] = useReducer(AppReducer, appInitialState)
    return (
        <ModalContexto.Provider value={{
            tituloModal: state.tituloModal,
            setTituloModal: titulo => dispatch({ type: SET_TITULO_MODAL, payload: titulo }),
            mensagemModal: state.mensagemModal,
            setMensagemModal: mensagem => dispatch({ type: SET_MENSAGEM_MODAL, payload: mensagem }),
            modalAtivo: state.modalAtivo,
            callback: state.callback,
            trocaModal: _ => dispatch({ type: TROCA_MODAL }),
            setModal: modal => dispatch({ type: SET_MODAL, payload: modal }),
            botoes: state.botoes,
            setBotoesModal: botoes => dispatch({ type: SET_BOTOES_MODAL, payload: botoes }),
            larguraModal: state.larguraModal,
            setLarguraModal: largura => dispatch({ type: SET_LARGURA_MODAL, payload: largura })
        }}>
            {children}
        </ModalContexto.Provider >
    )
}

export const useModalContexto = () => {
    const {
        tituloModal,
        setTituloModal,
        mensagemModal,
        setMensagemModal,
        modalAtivo,
        trocaModal,
        setModal,
        callback,
        botoes,
        setBotoesModal,
        larguraModal,
        setLarguraModal
    } = useContext(ModalContexto)
    return {
        tituloModal,
        setTituloModal,
        mensagemModal,
        setMensagemModal,
        modalAtivo,
        trocaModal,
        setModal,
        callback,
        botoes,
        setBotoesModal,
        larguraModal,
        setLarguraModal
    }
}