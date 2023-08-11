export const filtroInitialState = {
    filtroExpandido: true
}

export const TROCA_FILTRO_EXPANDIDO = "troca_filtro_expandido"
export const SET_FILTRO_EXPANDIDO = "set_filtro_expandido"

export const FiltroReducer = (state, action) => {
    switch (action.type) {
        case TROCA_FILTRO_EXPANDIDO:
            return { ...state, filtroExpandido: !state.filtroExpandido }
        case SET_FILTRO_EXPANDIDO:
            return { ...state, filtroExpandido: action.payload }
        default:
            return state
    }
}