import React from "react";
import {Ability, AbilityBuilder} from '@casl/ability'

const { can, build } = new AbilityBuilder(Ability);
can('login', 'Rota')
export default build()


//Rotas
/*can('login', 'Rota')
can('inicioDashboard', 'Rota')
can('orgaosDashboard', 'Rota')
can('usuariosDashboard', 'Rota')
can('perfisDashboard', 'Rota')

//Orgãos
can('cadastrarOrgao', 'Rota')
can('editarOrgaos', 'Rota')
can('listarOrgaos', 'Rota')
can('ativarDesativarOrgaos', 'Rota')
can('historicoDeAutoridades', 'Rota')
can('gerenciarAcessoAosModulos', 'Rota')

//Usuários
can('cadastrarUsuario', 'Rota')
can('editarUsuarios', 'Rota')
can('listarUsuarios', 'Rota')
can('ativarDesativarUsuarios', 'Rota')
can('visualizarHistoricoDeCargos', 'Rota')
can('alterarCargo', 'Rota')

//Perfis
can('cadastrarPerfil', 'Rota')
can('editarPerfis', 'Rota')
can('listarPerfis', 'Rota')
can('ativarDesativarPerfis', 'Rota')
can('restringirFuncionalidades', 'Rota')
can('compararPerfis', 'Rota')
});*/