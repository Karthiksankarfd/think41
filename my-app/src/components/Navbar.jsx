import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 shadow">
        <div className="container mx-auto">
          <Link to="/" className="text-xl font-bold hover:underline">
            🛍️ Product Store
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
