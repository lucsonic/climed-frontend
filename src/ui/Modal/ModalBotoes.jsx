import React from 'react';

import { Button } from '@material-ui/core';

import { useModalContexto } from '../../services/contextos/ModalContexto';

import { useEstiloModal } from './ModalEstilo';

const ModalBotoes = (props) => {
    const { trocaModal, callback, botoes } = useModalContexto()
    const { setLoadingCallback } = props
    const handleClose = () => {
        trocaModal()
    }
    const { botao } = useEstiloModal()
    return botoes ? botoes : callback ? (
        <React.Fragment>
            <Button onClick={handleClose} className={botao}>
                Não
            </Button>
            <Button onClick={async () => {
                setLoadingCallback(true)
                await callback()
                setLoadingCallback(false)
            }} className={botao}>
                Sim
            </Button>
        </React.Fragment>
    ) : (
            <Button onClick={handleClose} className={botao}>
                Ok
            </Button>
        )
}

export default ModalBotoes
