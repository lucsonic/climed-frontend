import React from "react"

const Usuario = React.lazy(_ => import('../../components/Usuario/Usuario'))
const UsuarioCadastrar = React.lazy(_ => import('../../components/Usuario/UsuarioCadastrar'))

const rotas_ = {
    usuarios: [
        {
            nome: "Usuários",
            menu: true,
            url: "/usuario",
            posicao: 0,
            component: Usuario,
            icone: "fas fa-users"
        },
        {
            nome: "Cadastrar Usuário",
            menu: true,
            url: "/usuario/cadastrar",
            posicao: 1,
            component: UsuarioCadastrar,
            icone: "fas fa-new"
        }
    ]
}

export default rotas_