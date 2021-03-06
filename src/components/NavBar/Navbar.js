import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navbar from '../../style/navbar.scss'

class Navbar extends Component {
   render() {
       return (
          <div className='navdiv'>
    <div className='navbuttons'>
         
            <Link to={`/`}>
            <button>Home</button>
            </Link>
            <div className='nav'> 
            <Link to={`/gallery`}>
            <button>Gallery</button>
            </Link>
            <Link to={'/Team'}>
            <button>Team</button>
            </Link>
            <Link to={'/login'}>
            <button>Artist Log in</button>
            </Link>
            
            <div className='dashnavlogo'>
            </div>
          <img src='https://brushandbevelcom.files.wordpress.com/2018/12/cropped-The-Good-Logo-3-6.png' alt='brush and bevel logo' height='200' width='200'/>
            </div>
    </div>
    </div>
       )
    }
}

export default Navbar;