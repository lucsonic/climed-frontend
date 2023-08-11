import React, { useState } from 'react'

import { Table, TableSortLabel, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from '@material-ui/core';

import { useEstiloTabelaDados } from './TabelaDadosEstilo';
import { useOrdenacaoTabela } from '../../services/hooksAuxiliares/ordenacaoTabela';

const TabelaDados = props => {
    const { temPaginacao = true, cabecalhos, linhas, limitePagina, totalLinhas, alteraPagina, todosDados, setTodosDados, temOpcoes, temdscDiligencia = true } = props

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
                <Table size="small" padding="checkbox"  >
                    <TableHead >
                        <TableRow >
                            {cabecalhos && cabecalhos.map((cabecalho, key) => {
                                let alinhamento_titulos = ''
                                let largura_titulos = ''

                                switch (cabecalho?.titulo) {
                                    case ('Data da Diligência'):
                                        alinhamento_titulos = 'center'
                                        largura_titulos = '15%'
                                        break
                                    case ('Responsável'):
                                        alinhamento_titulos = 'center'
                                        largura_titulos = '15%'
                                        break
                                    case ('Descrição da Diligência'):
                                        alinhamento_titulos = 'left'
                                        largura_titulos = '50%'
                                        break
                                    case ('Anexo'):
                                        alinhamento_titulos = 'left'
                                        largura_titulos = '5%'
                                        break
                                    case ('Situação'):
                                        alinhamento_titulos = 'center'
                                        largura_titulos = '5%'
                                        break
                                }
                                return <TableCell style={{ textAlign: `${alinhamento_titulos}`, }} key={"cabecalho" + key}>
                                    <TableSortLabel style={{ textAlign: "center", }}
                                        active={ordenaPor === cabecalho?.chave}
                                        direction={ordem}
                                        onClick={ordenacao ? ordenacao(cabecalho?.chave) : null}
                                    >
                                        {cabecalho?.titulo}
                                    </TableSortLabel>
                                </TableCell>
                            })}
                            {temOpcoes && <TableCell style={{ textAlign: "center" }} key={"cabecalho" + cabecalhos?.length}>Opções</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {linhas.map(
                            (linha, chaveLinha) => (
                                <TableRow key={"linhas" + chaveLinha} className={chaveLinha % 2 ? corLinha : null}>
                                    {Object.keys(linha).map((chaveColuna) => {
                                        let alinhamento = ''
                                        let largura = ''

                                        switch (chaveColuna) {
                                            case ('datCadastro'):
                                                alinhamento = 'center'
                                                largura = '15%'
                                                break
                                            case ('responsavel'):
                                                alinhamento = 'center'
                                                largura = '10%'
                                                break
                                            case ('dscDiligencia'):
                                                alinhamento = 'left'
                                                largura = '50%'
                                                break
                                            case ('anexo'):
                                                alinhamento = 'center'
                                                largura = '5%'
                                                break
                                            case ('situacao'):
                                                alinhamento = 'center'
                                                largura = '5%'
                                                break
                                            case ('opcoes'):
                                                alinhamento = 'center'
                                                largura = '15%'
                                                break
                                        }

                                        return <TableCell style={{ textAlign: `${alinhamento}`, padding: '5', width: `${largura}` }} key={"coluna" + chaveColuna}>{linha[chaveColuna]}</TableCell>
                                    })}
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