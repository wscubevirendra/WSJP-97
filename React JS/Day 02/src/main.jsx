import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Person from './Person'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{
      display: "flex",
      gap: "50px",
      flexWrap:"wrap"
    }}>
      <App />
      <App />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />

    </div>
  </StrictMode>,
)

//JSX
// single souce convert another source