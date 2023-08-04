import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import App from './App'
import tema from './services/configuracoes/tema'
import StorageProvider from './services/contextos/StorageContexto';

ReactDOM.render(
  <ThemeProvider theme={tema}>
    <CssBaseline />
    <StorageProvider>
      <App />
    </StorageProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
