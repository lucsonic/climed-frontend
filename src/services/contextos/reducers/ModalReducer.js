export const appInitialState = {
    tituloModal: "",
    mensagemModal: "",
    modalAtivo: false,
    callback: null,
    botoes: null,
    larguraModal: ""
}

export const SET_TITULO_MODAL = "set_titulo_modal"
export const SET_MENSAGEM_MODAL = "set_mensagem_modal"
export const SET_BOTOES_MODAL = "set_botoes_modal"
export const TROCA_MODAL = "troca_modal"
export const SET_LARGURA_MODAL = "set_largural_modal"
export const SET_MODAL = "set_modal"
export const AppReducer = (state, action) => {
    switch (action.type) {
        case SET_TITULO_MODAL:
            return { ...state, tituloModal: action.payload }
        case SET_MENSAGEM_MODAL:
            return { ...state, mensagemModal: action.payload }
        case SET_BOTOES_MODAL:
            return { ...state, botoes: action.payload }
        case TROCA_MODAL:
            return { ...state, modalAtivo: state.modalAtivo ? false : true }
        case SET_LARGURA_MODAL:
            return { ...state, larguraModal: action.payload }
        case SET_MODAL: {
            const { titulo, mensagem, callback, botoes, larguraModal } = action.payload
            return {
                ...state,
                modalAtivo: true,
                tituloModal: titulo,
                mensagemModal: mensagem,
                callback: callback,
                botoes: botoes,
                larguraModal: larguraModal,
            }
        }
        default:
            return state
    }
}