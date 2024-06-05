import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <div>test here</div>
      <App />
    </React.StrictMode>,
  )
});
