import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import HeaderOption from '../HeaderOption'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import TodayIcon from '@material-ui/icons/Today';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../config/fbconfig';
import { logout, selectUser } from '../features/user/userSlice';

function Header() {

    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                <input placeholder='Search' type="text"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={LibraryBooksIcon} title='Blog' />
                <HeaderOption Icon={TodayIcon} title='Events' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar={true} title='me' onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header
