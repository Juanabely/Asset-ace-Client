import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Admin from './Components/AdminDashboard/Admin/Admin.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
        </BrowserRouter>
    
  </React.StrictMode>,
)
