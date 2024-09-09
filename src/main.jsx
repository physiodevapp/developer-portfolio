import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PortfolioPage } from './pages/Portfolio/PortfolioPage.tsx';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles } from './styles/GlobalStyles.ts';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles/>
      <PortfolioPage/>
    </ThemeProvider>
  </StrictMode>,
)
