import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import SingleBlog from './components/SingleBlog'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
