import { Drawer, Icon } from "@material-ui/core"
import { useStorage } from "../../services/contextos/StorageContexto"
import logo from '../../../src/img/logo.png'
import { Link } from "react-router-dom"
import { Divider } from "@mui/material"
import { TreeItem, TreeView } from "@material-ui/lab"
import { ChevronRight, ExpandMore } from "@mui/icons-material"
import { useBarraLateralEstilo } from "./BarraLateralEstilo"
import rotas_ from "../../services/configuracoes/rotas_"

const BarraLateral = (props) => {
    const { drawer, selected, drawerPaper } = useBarraLateralEstilo()
    const { token } = useStorage()

    return (
        token && (
            <Drawer
                className={drawer}
                variant="permanent"
                classes={{
                    paper: drawerPaper,
                }}
                anchor="left"
            >
                <Link to="/">
                    <div>
                        <img style={{ height: '80px', width: '100%' }} align={'left'} src={logo} />
                    </div>
                </Link>
                <Divider />
                <div style={{
                    display: 'block',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 20,
                    textAlign: 'left'
                }}>
                    <TreeView
                        style={{
                            height: 'auto',
                            maxWidth: 400,
                            flexGrow: 1
                        }}
                        defaultCollapseIcon={<ExpandMore />}
                        defaultExpandIcon={<ChevronRight />}
                    >

                        {/* <Link to="/usuario">
                            <TreeItem label={'Usuários'} ></TreeItem>
                        </Link> */}



                        {
                            rotas_.usuarios.map((rota) => {
                                return (
                                    <Link to={rota.url}>
                                        <Icon className={rota?.icone} style={{ fontSize: 20, width: "1.2em" }} />
                                        <TreeItem label={rota.nome}></TreeItem>
                                    </Link>
                                )
                            })
                        }



                        {/* {
                            Rotas.map((rota) => {
                                <TreeItem label={rota.nome} onClick={() => rota.url} className={selected}></TreeItem>
                            })

                        } */}
                    </TreeView>
                </div>
            </Drawer>
        )
    )
}

export default BarraLateral