import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvidor from './context/ShopContext'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvidor>
      <Theme>
      <App />
      </Theme>
    </ShopContextProvidor>
  </BrowserRouter>,
)
