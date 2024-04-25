import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import Contact from './Contact'

export default function Allroutes() {
  return (
    <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/registration' element={<Form/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
  )
}
