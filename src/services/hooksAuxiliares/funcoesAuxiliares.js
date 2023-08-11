import Swal from "sweetalert2"

export const useFuncoesAuxiliares = () => {

    const gerarFiltro = filtro => {
        filtro = filtro?.join("&")
        return (filtro) ? (`?${filtro}`) : ""
    }

    const formataCPF = (cpf) => {
        cpf = cpf?.replace(/[^\d]/g, "");
        return cpf?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    const successAlert = (title) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: title,
            showConfirmButton: false,
            timer: 2000
        })
    }

    const errorAlert = (title, text) => {
        Swal.fire({
            icon: 'error',
            title: title,
            text: text
        })
    }

    return {
        gerarFiltro,
        formataCPF,
        successAlert,
        errorAlert
    }
}


