import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import AdminLogin from './Pages/Login'
import ProtectedRoute from './Components/ProtectRoutes'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AdminLogin/>} />
      <Route path='/dashboard'element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App