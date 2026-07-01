import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
