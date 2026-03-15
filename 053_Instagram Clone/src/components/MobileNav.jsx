import React from 'react';
import { AiFillHome, AiOutlineSearch, AiOutlinePlusSquare, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 py-2 px-6 md:hidden">
      <div className="flex justify-between items-center">
        <AiFillHome className="text-2xl" />
        <AiOutlineSearch className="text-2xl" />
        <AiOutlinePlusSquare className="text-2xl" />
        <AiOutlineHeart className="text-2xl" />
        <AiOutlineUser className="text-2xl" />
      </div>
    </nav>
  );
};

export default MobileNav;