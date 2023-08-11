import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useRequisicoesSelectBox } from '../../services/requisicoesHttp/RequisicoesSelectBox'
import _ from 'lodash';
import { useModalContexto } from "../../services/contextos/ModalContexto";

/**
 * Componente padrão de select/dropdowlist/combobox.
 * 
 * As propriedades padrão são: url, id, label, value.
 * Observação: Se a propriedade multiple for declarada, 
 * por padrão, o value deverá ser um array.
 */
class SelectBox extends Component {

    constructor(props) {
        super(props)

        this.state = {
            options: [],
            value: !!this.props.multiple ? [] : null,
            disabled: this.props.disabled ?? false,
            loading: true
        }
    }

    componentWillMount() {

        this.getOptions().then(() => {

            this.setSelectedOption()
            this.setState({ loading: false })

        })
    }


    /**
     * Seta a opção informada depois que as options
     * são carregadas.
     */
    setSelectedOption() {

        setTimeout(() => {

            // Caso seja uma lista simples e não tenha um valor default definido.
            if (this.props.value === undefined || this.props.value === '') {

                let firstOption = this.state.options[{}];

                if (!!firstOption) {
                    this.setState({ value: { value: firstOption?.value, label: firstOption?.label } })
                    this.props.onChange(firstOption);
                }
            }

            // Caso seja uma lista simples e tenha valor default definido.
            else if (this.state.options.length && !this.props.multiple) {

                let selected = this.state.options.find(option => String(option.value) === String(this.props.value));

                if (!!selected) {
                    this.setState({ value: selected })
                    this.props.onChange(selected);
                }
            }

            // Caso seja uma lista multipla, verifica os valores informados e seta no componente.
            else if (this.state.options.length && !!this.props.multiple) {

                let selected = this.state.options.filter(option => this.props.value.map(i => String(i.value)).includes(String(option.value)));

                if (!!selected) {
                    this.setState({ value: selected })

                    // Removido para evitar o disparo do onchange quando o componente é montado
                    // this.props.onChange(selected);
                }
            }

        }, 350)

    }

    /**
     * Recupera as opções de acordo com a url informada
     * nas propriedades.
     */
    getOptions() {

        return new Promise((resolve, reject) => {

            this.props.options(this.props.url).then(

                response => {
                    let result = response.data;

                    let options = result.map(d => ({
                        "value": d.id,
                        "label": d.name
                    }))

                    this.setState({ options: options }, resolve())

                }).catch(
                    () => {
                        reject(`Ocorreu algum erro ao carregar o campo: ${this.props.name}!`)
                    }
                );;
        })
    }

    /**
     * Emite o evento de alteração pro componente
     * @param {*} event 
     * @param {*} value 
     */
    handleChange(event, value) {
        this.setState({ value: value })
        this.props.onChange(value);
    }

    /**
     * Reapresenta as opções recuperadas do banco ao usuário.
     * @param {*} e 
     */
    reloadSelect(e) {

        /*
         * Casa exista a necessidade de carregar
         * as options novamente.
         */
        if (this.props.isAjax) {
            this.setState({ loading: true })
            this.getOptions().then(this.setState({ loading: false }));
        }
    }

    render() {
        return (
            <div>
                <Autocomplete
                    {...this.props}
                    loading={this.state.loading}
                    disabled={this.state.disabled}
                    loadingText="Carregando..."
                    value={this.state?.value}
                    options={this.state.options}
                    onOpen={e => this.reloadSelect(e)}
                    getOptionSelected={(option, value) => option?.value === value?.value}
                    onChange={(event, value) => this.handleChange(event, value)}
                    getOptionLabel={(option) => option.label}
                    defaultValue={!!this.state.defaultValue ? this.state.defaultValue : this.state.value}
                    renderInput={(params) => <TextField
                        {...params}
                        label={this.props.label}
                        variant="standard"
                        error={this.props.error}
                        helperText={this.props.helperText}
                    />}
                />
            </div>
        )
    }
}

export default (props) => {
    const { setModal, trocaModal } = useModalContexto()
    const { getOptions } = useRequisicoesSelectBox()
    const propeties = _.extend({}, props, { options: getOptions });

    return (
        <SelectBox
            {...propeties}
        />
    )
}
