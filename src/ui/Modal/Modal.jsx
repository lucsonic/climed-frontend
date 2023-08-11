import React, { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid } from "@material-ui/core"

import LoadingCircular from '../Loading/LoadingCircular'
import ModalBotoes from './ModalBotoes'

import { useModalContexto } from '../../services/contextos/ModalContexto'

import { useEstiloModal } from './ModalEstilo'

const Modal = (props) => {
    const { tituloModal, mensagemModal, modalAtivo, trocaModal, larguraModal, callback } = useModalContexto();
    const [loadingCallback, setLoadingCallback] = useState(false)

    const { botao, loadingEstilo } = useEstiloModal()

    const handleClose = () => {
        trocaModal()
    }

    return (
        <Dialog
            fullWidth
            disableEscapeKeyDown
            disableBackdropClick
            maxWidth={larguraModal || "sm"}
            onClose={handleClose}
            open={modalAtivo}
        >
            {loadingCallback ? (
                <Grid container justify="center" className={loadingEstilo}>
                    <LoadingCircular />
                </Grid>
            ) : (
                <React.Fragment>
                    <DialogTitle onClose={handleClose} style={{ textTransform: "capitalize" }}>
                        {tituloModal}
                        <Divider />
                    </DialogTitle>
                    <DialogContent>
                        {mensagemModal}
                    </DialogContent>
                    <DialogActions>
                        <ModalBotoes botao={botao} setLoadingCallback={setLoadingCallback} trocaModal={trocaModal} callback={callback} />
                    </DialogActions>
                </React.Fragment>
            )
            }
        </Dialog>
    )
}

export default Modal
