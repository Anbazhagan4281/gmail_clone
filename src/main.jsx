import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ComposeProvider } from "../src/components/ComposeContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComposeProvider>
      <App />
    </ComposeProvider>
  </React.StrictMode>,
)
