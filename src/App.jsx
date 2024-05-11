import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Auth/login.jsx'
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ImageUpload from "./components/ImageUpload/ImageUpload.jsx";
import { useEffect, useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  function search() {
    console.log('searching')
  }
  console.log(searchTerm)
  return (
    <>

      <BrowserRouter>
        <NavBar setSearchTerm={setSearchTerm}/>
        <Routes>
          <Route path='/' element={<Home searchTerm={searchTerm}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/upload' element={<ImageUpload />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
