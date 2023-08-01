import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import './App.css';
import { useRequisicoesLogin } from './services/requisicoesHttp/RequisicoesLogin';
import { useState } from 'react';
import LoadingCircular from './ui/LoadingCircular/LoadingCircular';

function App() {
  const { login } = useRequisicoesLogin()
  const [loading, setLoading] = useState(false)
  const [usuario, setUsuario] = useState([])
  const [dados, setDados] = useState({
    email: '',
    senha: ''
  })

  const handleChange = e => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value
    });
  }

  const handleLogin = async () => {
    setLoading(true)
    const { data } = await login(dados)
    setUsuario(data)
    console.log(data);
    setLoading(false)
  }

  return (
    <div className="App">
      <Typography component="h1" variant="h4" color="#1565C0" style={{ paddingTop: 30, paddingBottom: 30 }}>
        Login
      </Typography>
      <Divider />
      <Grid style={{ paddingBottom: 20 }}>
        <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <TextField
            type='text'
            label="Email"
            name='dsc_email'
            onChange={handleChange}
            value={dados?.usuario}
            variant="outlined"
          />
        </div>
        <TextField
          type='password'
          label="Senha"
          name='dsc_senha'
          onChange={handleChange}
          value={dados?.usuario}
          variant="outlined"
        />
      </Grid>
      <Divider />
      {loading ? (
        <LoadingCircular />
      ) : (
        <>
          <div>{usuario?.usuario?.nom_usuario}</div>
          <div>Úmtimo acesso: {usuario?.ultimo_acesso}</div>
        </>
      )}
      <div style={{ paddingTop: '20px', paddingBottom: '30px' }}>
        <Button variant="contained" color='primary' onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
}

export default App;
