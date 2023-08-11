import { useCallback, useEffect, useState } from "react"

export const usePaginacao = (setItems, todosItens) => {
    const [pagina, setPagina] = useState(0)
    const [limite, setLimite] = useState(25)
    const [totalDados, setTotalDados] = useState(0)

    const alteraPagina = useCallback((novaPagina, novoLimite) => {
        setPagina(novaPagina)
        setLimite(novoLimite)
    }, [setPagina, setLimite])

    useEffect(() => {
        setItems(todosItens.slice((pagina * limite), limite * (pagina + 1)))
    }, [pagina, limite, todosItens, setItems])

    return {
        limite,
        totalDados,
        setPagina,
        setLimite,
        setTotalDados,
        alteraPagina
    }
}

