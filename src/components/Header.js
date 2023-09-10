import React from 'react';
import Logo from '../assets/logo.svg'; //

const Header = () => {
  return (
  <header className= 'py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center lg:w-40 w-20   '>
        <a href="" target="_blank">
          <img src= {Logo} alt=""  />
        </a>
        {/* <a href="https://www.linkedin.com/in/marivaldotorres/" target="_blank">
        <button className='btn btn-sm'>Work with me</button>
        </a> */}
        </div>
    </div>
    </header>
    );
};

export default Header;