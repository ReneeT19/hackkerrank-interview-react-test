import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/home' activeStyle>
              Home
            </Link>
            <Link to='/news' activeStyle>
              News
            </Link>
            <Link to='/contact' activeStyle>
              Contact
            </Link>
            <Link to='/about' activeStyle>
              About
            </Link>
            </div>
    );
  };
    
  export default Navbar;