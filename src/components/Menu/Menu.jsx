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

export default function Menu({page}) {
  return (
    <div className='MenuContainer'>
        <ul className='MenuItems'>
                         <div className='MenuSocial'>Post Explore</div>
            <li className='MenuItem Active' onClick={()=>page('home')}>
                <PostAddIcon/>
                All post
            </li>
                        <li className='MenuItem' onClick={()=>page('save')}>
                <DriveFileRenameOutlineOutlinedIcon/>
                Share expertise
            </li>
                        <li className='MenuItem' onClick={()=>page('save')}>
                <SaveOutlinedIcon/>
                Save post
            </li>
            <hr className='Horiline'/>
            <div className='MenuSocial'>Social</div>
                        <li className='MenuItem'>
                <ContactPageOutlinedIcon/>
                Track expert
            </li>
                        <li className='MenuItem'>
                <ConnectWithoutContactOutlinedIcon/>
                Friends post
            </li>
                        <li className='MenuItem'>
                <ForumIcon/>
                Community
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
            <li className='MenuItem'>
                <NotificationsActiveIcon/>
                Notification
            </li>

            <li className='MenuItem'>
                <ManageAccountsIcon/>
                Profile
            </li>
                        <li className='MenuItem'>
                <LogoutIcon/>
                Logout
            </li>
           
        </ul>
    </div>
  )
}
