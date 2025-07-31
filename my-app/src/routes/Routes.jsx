import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Product from '../pages/Product';
import Navbar from '../components/Navbar'; // Optional

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Index />} />
        <Route path='product/:id' element={<Product />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
