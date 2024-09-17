import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import menu from '../assets/icons/menu.png';
import { Link } from 'react-router-dom';
import home from '../assets/icons/home.png'
import singupmenu from '../assets/icons/singupmenu.png'
import loginmenu from '../assets/icons/loginmenu.png'
import panter from '../assets/icons/panter.png'


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=''>
      <div className=''>
        <nav className='w-full p-3 flex justify-between items-center nav-color border-b-2 border-white  '>
          <div className='nav-container '>
            <img src={panter} alt="Season" className='w-[6rem] color-black' />
            <Link to='/'><h1 className='font-bold tracking-wide text-[3rem] text-weatherapp'>Panter Akademi</h1></Link>
          </div>
          <div className='menu-container '>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <img src={menu} alt="Menu" className='menu' />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to='./'><img src={home} alt="" className='home-icon' /></Link>
                <Link to='./'>Home</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to='./SignUp'><img src={singupmenu} alt="" className='home-icon' /></Link>
                <Link to='./SignUp'>Sign Up</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to='./Login'><img src={loginmenu} alt="" className='home-icon' /></Link>
                <Link to='./Login'>Log In</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to='./Logout'><img src={loginmenu} alt="" className='home-icon' /></Link>
                <Link to='./LogOut'>LogOut</Link>
              </MenuItem>

            </Menu>
          </div>
        </nav>
      </div>
    </div>
  );
}
