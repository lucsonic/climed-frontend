import React, { useEffect, useState } from "react";
import FiltroPadrao from "../../ui/FiltroPadrao/FiltroPadrao";
import { Button, FormControl, Grid, InputLabel, Select, TextField } from "@material-ui/core";
import BotaoPadrao from "../../ui/BotaoPadrao/BotaoPadrao";
import { Add, Clear, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const UsuarioFiltro = (props) => {
    const { filtroCallback } = props
    const [filtro, setFiltro] = useState({
        busca: '',
        flg_ativo: ''
    });

    const initialForm = ({
        busca: '',
        flg_ativo: ''
    })

    const submitFiltro = () => {
        filtroCallback({
            busca: filtro.busca,
            flg_ativo: filtro.flg_ativo
        })
    }

    useEffect(() => {
        submitFiltro()
    }, [])

    const limpaFiltros = () => {
        setFiltro(initialForm);
    };

    const handleChange = e => {
        setFiltro({
            ...filtro,
            [e.target.name]: e.target.value
        });
    }

    const handleSelect = (name, value) => {
        setFiltro({
            ...filtro,
            [name]: value
        });
    }

    return (
        <React.Fragment>
            <FiltroPadrao>
                <Grid container spacing={1}>
                    <Grid item xs={10}>
                        <TextField
                            fullWidth
                            autoComplete='off'
                            label="Busca (nome, email, perfil, CPF)"
                            name="busca"
                            value={filtro?.busca}
                            resetForm
                            onChange={handleChange}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    submitFiltro();
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="flg_ativo">Status</InputLabel>
                            <Select
                                native
                                name="flg_ativo"
                                id="flg_ativo"
                                value={filtro?.flg_ativo}
                                resetForm
                                onChange={(e) => {
                                    let value = e.target.value
                                    handleSelect("flg_ativo", value)
                                }}>
                                <option aria-label="None" value="" />
                                <option value={'1'}>Ativo</option>
                                <option value={'0'}>Inativo</option>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={2} style={{ paddingLeft: 0, textAlign: 'left', paddingTop: 25 }}>
                        <Button component={Link} to="/usuario/cadastrar" style={{ backgroundColor: 'gray', color: '#fff' }} type="button">
                            <Add /><div>&nbsp;&nbsp;</div>Novo Usuário
                        </Button>
                    </Grid>
                    <Grid container item xs={10} justify="flex-end">
                        <BotaoPadrao type="button" onClick={limpaFiltros}>
                            <Clear /><div>&nbsp;&nbsp;</div> Limpar Filtros
                        </BotaoPadrao>
                        <BotaoPadrao type="submit" onClick={submitFiltro}>
                            <Search /><div>&nbsp;&nbsp;</div>Filtrar
                        </BotaoPadrao>
                    </Grid>
                </Grid>
            </FiltroPadrao>
        </React.Fragment>
    )
}

export default UsuarioFiltro