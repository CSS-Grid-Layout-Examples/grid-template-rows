/* node modules */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* app imports */
import "@common/css/common.scss";
import AppOutlet from '@components/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppOutlet />
  </StrictMode>,
)
