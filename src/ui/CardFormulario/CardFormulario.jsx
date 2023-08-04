import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import { useEstiloCardFormulario } from './CardFormularioEstilo'

const CardFormulario = props => {
    const { children } = props
    const { root } = useEstiloCardFormulario()

    return (
        <Card className={root}>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}
export default CardFormulario