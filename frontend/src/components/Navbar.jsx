import { assets } from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  }
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo_proiectPA} alt="" className='w-36' /></Link>

      {/* Desktop Menu */}
      <ul className='hidden sm:flex gap-5 text-white-100 text-sm'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-100 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-100 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-100 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-100 hidden' />
        </NavLink>
      </ul>

      {/* Right Side Icons */}
      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <div className='group relative'>
          <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} alt="" className='w-5 cursor-pointer' />
          {/*Drop down menu*/}
         {token &&
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-gray-900 text-white-100 rounded'>
              <p className='cursor-pointer hover:text-white'>My profile</p>
              <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-white'>Orders</p>
              <p onClick={logout} className='cursor-pointer hover:text-white'>Log out</p>
            </div>
          </div>}

        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 m-w-5' alt="" />
          <b className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-white text-black rounded-full text-[8px]'>
            {getCartCount()}
          </b>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-0 right-0 bottom-0 z-50 bg-black transition-all overflow-hidden ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-700'>
          <div className='flex items-center gap-4 p-3'>
            <img onClick={() => setVisible(false)} src={assets.dropdown_icon} className='cursor-pointer h-4 rotate-180' alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border text-gray-200' to='/'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border text-gray-200' to='/collection'>Collection</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border text-gray-200' to='/about'>About</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border text-gray-200' to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;