import React from 'react'
import "../Menu/menu.css"
import PostAddIcon from '@mui/icons-material/PostAdd';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { NavLink } from 'react-router-dom';

export default function Menu({page}) {
  return (
    <div className='MenuContainer'>
        <ul className='MenuItems'>
            <div className='MenuSocial'>Post Explore</div>
           
                <li >
                     <NavLink to="/allpost"  className={({ isActive }) => `${isActive ? 'MenuItem Active' : 'MenuItem'}`}>
                     

                            <PostAddIcon/>
                      
                        All post
                    </NavLink>
                </li>
                <li >
                   <NavLink to="/shareExpertise"  className={({ isActive }) => `${isActive ? 'MenuItem Active' : 'MenuItem'}`}>
                        <DriveFileRenameOutlineOutlinedIcon/>
                        Share expertise
                    </NavLink>
                </li>
                <li >
                     <NavLink to="/saveSection"  className={({ isActive }) => `${isActive ? 'MenuItem Active' : 'MenuItem'}`}>
                        <SaveOutlinedIcon/>
                        Save post
                      </NavLink>
                </li>
            <hr className='Horiline'/>
            <div className='MenuSocial' >Social</div>
                <li >
                     <NavLink to="/expertTrack"  className={({ isActive }) => `${isActive ? 'MenuItem Active' : 'MenuItem'}`}>
                        <ContactPageOutlinedIcon/>
                        Track expert
                    </NavLink>
                </li>
                <li>
                     <NavLink to="/friendPage"  className={({ isActive }) => `${isActive ? 'MenuItem Active' : 'MenuItem'}`}>
                        <ConnectWithoutContactOutlinedIcon/>
                        Friends post
                      </NavLink>
                </li>
                <li>
                     <NavLink to="/community"  className={({ isActive }) => `${isActive ? 'MenuItem Active' : 'MenuItem'}`}>
                        <ForumIcon/>
                        Community
                     </NavLink>
                 </li>
            <li className='MenuItem'>
                <PersonAddAltOutlinedIcon/>
                Invites
            </li>
                        
             <hr className='Horiline'/>
             <div className='MenuSocial'>General</div>
            <li className='MenuItem'>
                <HistoryOutlinedIcon/>
                History
            </li>
            <li>
                  <NavLink to="/Notification"  className={({ isActive }) => `${isActive ? 'MenuItem Active' : 'MenuItem'}`}>
                
                    <NotificationsActiveIcon/>
                    Notification
                  </NavLink>
            </li>

            <li >
                <NavLink to="/profile"  className={({ isActive }) => `${isActive ? 'MenuItem Active' : 'MenuItem'}`}>
                    <ManageAccountsIcon/>
                    Profile
               </NavLink>
            </li>
                        <li className='MenuItem'>
                <LogoutIcon/>
                Logout
            </li>
           
        </ul>
    </div>
  )
}
