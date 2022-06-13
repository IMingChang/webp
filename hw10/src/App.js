import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Appbar from './pages/Appbar'
import Person from './pages/Person'
import Home from './pages/Home'
import TimeLong from './pages/TimeLong'

const pages = ['Home', 'Person', 'TimeLong'];

function router() {
  return (
    <BrowserRouter>
      <Appbar pages={pages} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Person' element={<Person />} />
        <Route path='/TimeLong' element={<TimeLong />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes >

    </BrowserRouter>
  )
}

export default router
