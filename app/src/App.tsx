import ProductFeedback from './pages/ProductFeedback/ProductFeedback';
import { AppDataProvider } from './context/AppDataContext';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';

function App() {
  return (
    <AppDataProvider>
      <div className="App">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </AppDataProvider>
  )
}

export default App
