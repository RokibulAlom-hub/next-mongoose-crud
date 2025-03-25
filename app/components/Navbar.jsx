import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="p-3">
        <ul className="flex gap-2 justify-center ">
          <Link href="/">
          Home 
          </Link>
          <Link href="/addproducts" className=' '>
          AddProducts
          </Link>
        </ul>
      </nav>
    );
};

export default Navbar;