import './App.css';
import { Suspense } from 'react';
import ModalProvider from './services/contextos/ModalContexto';
import Rotas from './services/configuracoes/Rotas';
import { RouterProvider } from 'react-router-dom';

function App() {

  const rotas = Rotas();

  return (
    <div className="App">
      <Suspense fallback="">
        <ModalProvider>
          <RouterProvider router={rotas} />
        </ModalProvider>
      </Suspense>
    </div>
  );
}

export default App;
