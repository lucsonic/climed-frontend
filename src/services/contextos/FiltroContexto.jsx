import React, { useContext, useReducer } from "react"
import {
    FiltroReducer,
    filtroInitialState,
    TROCA_FILTRO_EXPANDIDO,
    SET_FILTRO_EXPANDIDO,
} from "./reducers/FiltroReducer"

const FiltroContexto = React.createContext()

export default function FiltroProvider({ children }) {
    const [state, dispatch] = useReducer(FiltroReducer, filtroInitialState)
    return (
        <FiltroContexto.Provider value={{
            filtroExpandido: state.filtroExpandido,
            trocaFiltroExpandido: _ => dispatch({ type: TROCA_FILTRO_EXPANDIDO }),
            setFiltroExpandido: valor => dispatch({ type: SET_FILTRO_EXPANDIDO, payload: valor }),
        }}>
            {children}
        </FiltroContexto.Provider >
    )
}

export const useFiltroContexto = () => {
    const {
        filtroExpandido,
        trocaFiltroExpandido,
        setFiltroExpandido
    } = useContext(FiltroContexto)
    return {
        filtroExpandido,
        trocaFiltroExpandido,
        setFiltroExpandido
    }
}