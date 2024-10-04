import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PortfolioPage } from './pages/Portfolio/PortfolioPage.tsx';
import { ThemeContextProvider } from './context/ThemeContext.tsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <PortfolioPage />
    </ThemeContextProvider>
  </StrictMode>,
)
