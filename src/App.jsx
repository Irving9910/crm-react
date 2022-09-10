import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout'
import Home from './pages/Home'
import AddClient from "./pages/AddClient";
import EditClient from "./pages/EditClient";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/clients" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="add" element={<AddClient />}/>
          <Route path="edit/:id" element={<EditClient />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
