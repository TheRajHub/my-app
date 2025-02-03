import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import "./index.css"
import UserDataProvider from './Context/UserDataProvider.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserDataProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<App/>}/>
        </Routes>
      </Router>
    </UserDataProvider>
  </StrictMode>
)
