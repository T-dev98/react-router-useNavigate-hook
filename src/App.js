import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import SingleProduct from "./pages/singleProduct";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import SahredLayout from "./pages/sharedLayout";
import Error from "./pages/error";


function App() {

  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SahredLayout/>}>
        <Route index element={<Home/>} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products/>} />
        <Route path='products/:productId' element={<SingleProduct/>} />
        <Route path='login' element={<Login setUser={setUser}></Login>} />
        <Route path='dashboard' element={<Dashboard user={user} />} />
        <Route path='*' element={<Error/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
