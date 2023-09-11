
import { AppDataProvider } from './context/AppDataContext';
import { AppStateProvider } from './context/AppStateContext';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';

function App() {
  return (
    <AppStateProvider>
      <AppDataProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
      </AppDataProvider>
    </AppStateProvider>
      
  )
}

export default App
