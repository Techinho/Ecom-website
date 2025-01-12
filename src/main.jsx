
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvidor from './context/ShopContext'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import { Provider } from "./components/ui/provider.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvidor>
      <Provider>
      <Theme>
      <App />
      </Theme>
      </Provider>
    </ShopContextProvidor>
  </BrowserRouter>,
)
