import React, { useState } from 'react'

import { Table, TableSortLabel, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from '@material-ui/core';

import { useEstiloTabelaDados } from './TabelaDadosEstilo';
import { useOrdenacaoTabela } from '../../services/hooksAuxiliares/ordenacaoTabela';
import { hover } from '@testing-library/user-event/dist/hover';

const TabelaDados = props => {
    const { temPaginacao = true, cabecalhos, linhas, limitePagina, totalLinhas, alteraPagina, todosDados, setTodosDados, temOpcoes = true } = props

    const [pagina, setPagina] = useState(0);
    const [linhasPorPagina, setLinhasPorPagina] = useState(limitePagina ? limitePagina : 25);

    const selecionaPagina = (event, novaPagina) => {
        setPagina(novaPagina);
        alteraPagina(novaPagina, linhasPorPagina)
    };
    const selecionaLinhasPorPagina = (event) => {
        let novaLinhasPorPagina = parseInt(event.target.value, 25)
        setLinhasPorPagina(novaLinhasPorPagina);
        setPagina(0);
        alteraPagina(0, novaLinhasPorPagina)
    }

    const {
        ordenaPor,
        ordem,
        ordenacao
    } = useOrdenacaoTabela(todosDados, setTodosDados)

    const { corLinha, semDados } = useEstiloTabelaDados()
    return (
        linhas?.length ? (
            <React.Fragment >
                <Table size="small" padding="checkbox">
                    <TableHead>
                        <TableRow >
                            {cabecalhos && cabecalhos.map((cabecalho, key) => (
                                <TableCell style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: 'navy', color: '#fff' }} key={"cabecalho" + key}>
                                    <TableSortLabel style={{ textAlign: "center" }}
                                        active={ordenaPor === cabecalho?.chave}
                                        direction={ordem}
                                        onClick={ordenacao ? ordenacao(cabecalho?.chave) : null}
                                    >
                                        {cabecalho?.titulo}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                            {temOpcoes && <TableCell style={{ textAlign: "center", fontWeight: 'bold', backgroundColor: 'navy', color: '#fff' }} key={"cabecalho" + cabecalhos?.length}>Opções</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {linhas.map((linha, chaveLinha) => (
                            <TableRow key={"linhas" + chaveLinha} className={chaveLinha % 2 ? corLinha : null}>
                                {Object.keys(linha).map((chaveColuna) => (chaveColuna !== "anexo" && chaveColuna !== "indice") && (
                                    <TableCell style={{ textAlign: 'center' }} key={"coluna" + chaveColuna}>{linha[chaveColuna]}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {temPaginacao &&
                    <TablePagination
                        component={"div"}
                        count={totalLinhas}
                        page={pagina}
                        onChangePage={selecionaPagina}
                        rowsPerPage={linhasPorPagina}
                        onChangeRowsPerPage={selecionaLinhasPorPagina}
                        labelRowsPerPage="Linhas por página"
                        labelDisplayedRows={
                            ({ from, to, count }) => {
                                return '' + from + '-' + to + ' de ' + count
                            }
                        } />
                }
            </React.Fragment>
        ) : (
            <div className={semDados}>
                <Typography>Sem informações para essa consulta</Typography>
            </div>
        )
    )
}

export default React.memo(TabelaDados)