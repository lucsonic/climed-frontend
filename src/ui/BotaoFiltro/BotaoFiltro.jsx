import React from 'react'

import { Tooltip } from '@material-ui/core'

import { useFiltroContexto } from '../../services/contextos/FiltroContexto'

import { useEstiloBotaoFiltro } from './BotaoFiltroEstilo'
import { Search } from '@mui/icons-material'

const BotaoFiltro = ({ titulo }) => {

    const { trocaFiltroExpandido } = useFiltroContexto()
    const { botaoFiltro } = useEstiloBotaoFiltro()

    return (
        <Tooltip title={titulo}>
            <div className={botaoFiltro} onClick={_ => trocaFiltroExpandido()}>
                <Search />
            </div>
        </Tooltip>
    )
}
export default BotaoFiltro