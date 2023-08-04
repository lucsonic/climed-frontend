import React from 'react'

import { Typography } from '@mui/material'
import { useEstiloTituloPagina } from "./TituloPaginaEstilo"

const TituloPagina = props => {
    const { root } = useEstiloTituloPagina()
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom className={root}>
            {props.children}
        </Typography>
    )
}
export default TituloPagina