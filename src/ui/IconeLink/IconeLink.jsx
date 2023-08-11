import React from 'react'
import { Link, Tooltip } from '@material-ui/core'
import { useEstiloIconeLink } from './IconeLinkEstilo'
const IconeLink = props => {
    const { url, children, titulo, tipo_icone } = props
    const { icone } = useEstiloIconeLink(tipo_icone)
    return (
        <Tooltip title={titulo} aria-label={titulo?.toLowerCase()} style={{ textTransform: "capitalize" }}>
            <Link href={url} className={icone} {...props}>
                {children}
            </Link>
        </Tooltip>
    )
}
export default IconeLink