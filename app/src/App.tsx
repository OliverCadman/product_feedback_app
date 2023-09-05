import ProductFeedback from './pages/ProductFeedback/ProductFeedback';

import data from './data/data'
import { AppDataProvider } from './context/AppDataContext';

function App() {
  return (
    <AppDataProvider>
      <div className="App">
        <ProductFeedback />
      </div>
    </AppDataProvider>
  )
}

export default App
