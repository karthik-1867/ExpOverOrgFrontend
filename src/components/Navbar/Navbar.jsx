import React from 'react'
import "../Navbar/navbar.css"
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
export default function Navbar() {
  return (
    <div className='Navbar'>
        <div className="NavbarLogo">
            <MenuBookOutlinedIcon/>
            <div className="NavbarText">
            <span>E</span>
            <span className='NavLogoFont'>xpOverOrg 
            </span>
            </div>
        </div>

        <div className="NavbarSearch">
            <SearchOutlinedIcon/>
            <input placeholder='search' className='NavbarSearchPlace'/>
        </div>
        <div className="NavbarDetails">
            <div className="NavbarProfile">
                <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="profile" className='NavbarProfileImg' />
                <span>Karthik</span>
            </div>
            <NotificationsActiveOutlinedIcon/> 
        </div>

    </div>
  )
}
