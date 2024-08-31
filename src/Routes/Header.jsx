import React, { useState } from 'react';
import { FaCar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaBarsProgress } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import { SiOpenmediavault } from "react-icons/si";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center shadow-md p-5 rounded-md bg-white">
        <div className="logo">
          <span className='flex items-center text-xl font-bold'>
            <FaCar /> Car Dekho
          </span>
        </div>

        <div className='hidden md:flex lg:flex gap-10'>
          <ul className='flex gap-10'>
            <li><Link to="/home" className='flex items-center gap-1'><IoHome size={20} />Home</Link></li>
            <li><Link to="/search" className='flex items-center gap-1'> <FaSearch size={20} />Search</Link></li>
            <li><Link to="/newpage" className='flex items-center gap-1'><FaNewspaper size={20} />Newpage</Link></li>
            <li><Link to="/preowned" className='flex items-center gap-1'> <SiOpenmediavault size={20} />Preowned</Link></li>
          </ul>
        </div>

        <div className='hidden md:flex lg:flex items-center gap-2'>
          <SignedOut>
            <SignInButton><Button>Sign In</Button></SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <Button>Add cars</Button>
          </SignedIn>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='lg:hidden md:hidden flex items-center'>
          <button onClick={toggleMenu} className='navbar-open'>
            {isMenuOpen ? <IoIosCloseCircle size={23} /> : <FaBarsProgress size={23} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-10'>
            <ul className='flex flex-col gap-5 text-xl'>
              <li><Link to="/home" onClick={toggleMenu} className='flex items-center gap-2'><IoHome size={20} />Home</Link></li>
              <li><Link to="/search" onClick={toggleMenu} className='flex items-center gap-2'> <FaSearch size={20} />Search</Link></li>
              <li><Link to="/newpage" onClick={toggleMenu} className='flex items-center gap-2'><FaNewspaper size={20} />Newpage</Link></li>
              <li><Link to="/preowned" onClick={toggleMenu} className='flex items-center gap-2'> <SiOpenmediavault size={20} />Preowned</Link></li>
            </ul>
            <div className='flex flex-col mt-5 items-center gap-y-2'>
              <SignedOut>
                <SignInButton><Button>Sign In</Button></SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
                <Button>Add cars</Button>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
