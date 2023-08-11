import { useState } from "react"

export const useOrdenacaoTabela = (dados, setDados) => {
    const [ordenaPor, setOrdenarPor] = useState("")
    const [ordem, setOrdem] = useState("asc")

    const logicaOrdenacao = (_ordenaPor, _ordem, items) => {
        return items.sort((i, j) => {
            if (i[_ordenaPor] < j[_ordenaPor]) {
                return _ordem === "asc" ? -1 : 1
            } else if (i[_ordenaPor] > j[_ordenaPor]) {
                return _ordem === "asc" ? 1 : -1
            } else {
                return 0
            }
        })
    }

    const ordenacao = (_ordenaPor) => {
        return evento => {
            let _ordem
            let itemsToSort = [...dados]
            if (_ordenaPor === ordenaPor) {
                _ordem = ordem === "asc" ? "desc" : "asc"
                setOrdem(_ordem)
            } else {
                _ordem = "asc"
                setOrdenarPor(_ordenaPor)
                setOrdem(_ordem)
            }
            setDados(logicaOrdenacao(_ordenaPor, _ordem, itemsToSort))
        }
    }

    return {
        ordenaPor,
        ordem,
        ordenacao
    }
}

