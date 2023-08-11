import { createBrowserRouter } from "react-router-dom";
import { useStorage } from "../contextos/StorageContexto";
import Conteudo from "../../ui/Conteudo/Conteudo";
import Login from "../../components/auth/login/Login";
import Home from "../../components/Home/Home";
import Usuario from "../../components/Usuario/Usuario";
import UsuarioCadastrar from "../../components/Usuario/UsuarioCadastrar";

const Rotas = () => {
    const { token } = useStorage()

    const isAutenticado = () => {
        return !!token;
    };

    return createBrowserRouter([
        {
            path: "/",
            element: <Conteudo />,
            // errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: !isAutenticado() ? <Login /> : <Home />,
                    titulo: 'Login'
                },
                {
                    path: "/home",
                    element: isAutenticado() ? <Home /> : <Login />,
                    titulo: 'Home'
                },
                {
                    path: '/usuario',
                    element: isAutenticado() ? <Usuario /> : <Login />,
                    titulo: 'Usuários'
                },
                {
                    path: '/usuario/cadastrar',
                    element: isAutenticado() ? <UsuarioCadastrar /> : <Login />,
                    titulo: 'Cadastrar usuário'
                },
                {
                    path: '/usuario/editar/:id',
                    element: isAutenticado() ? <UsuarioCadastrar /> : <Login />,
                    titulo: 'Edição de usuário'
                },                
            ]
        },
    ])
};

export default Rotas;