import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { Link, Typography } from '@material-ui/core'

import Rotas from "../../services/configuracoes/Rotas"
import { useEstiloMigalhaPagina } from './MigalhaPaginaEstilo'
import { useStorage } from '../../services/contextos/StorageContexto'

const MigalhaPagina = props => {
  const { root, ativo } = useEstiloMigalhaPagina()
  const { modulo } = useStorage()

  const params = useParams()
  let location = useLocation()
  let pathnames = location.pathname.split('/').filter(x => x)
  const indiceCorte = pathnames.length - (Object.values(params))?.length
  if (pathnames.length > indiceCorte) {
    pathnames = pathnames.slice(0, indiceCorte)
  }
  return (
    <Breadcrumbs aria-label="Breadcrumb" className={root} style={{ paddingTop: 10 }}>
      <Link href="/">
        {modulo === 'default' ? 'Home' : modulo}
      </Link>
      {pathnames.map((value, index) => {
        if (value === modulo) return null
        const last = index === pathnames.length - 1
        const to = `/${pathnames.slice(0, index + 1).join('/')}`
        const rotaAtual = modulo ?
          Rotas.modulos[modulo].find(rota => rota.migalha === to)
          :
          Rotas.modulos.default.find(rota => rota.migalha === to)
        const titulo = rotaAtual ? rotaAtual.nome : ""
        return last ? (
          <Typography key={to} className={ativo}>
            <b>{
              titulo
            }</b>
          </Typography>
        ) : (
          <Link href={to} key={to}>
            {titulo}
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}

export default MigalhaPagina