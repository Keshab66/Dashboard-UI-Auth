import React from 'react';
import "../css/MenuBar.css";
import { RiDashboard2Fill } from "react-icons/ri"
import { AiFillSetting } from "react-icons/ai"
import { BsFillTagsFill } from "react-icons/bs"
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import Dashboard from './Dashboard';
import Activities from './Activities';
import PieCharts from './PieCharts';
import Schedule from './Schedule';


const MenuBar = () => {
    return (
        <div className='main-container'>
            <div className='left-menu'>
                <header className='header'>Board.</header>
                <div className='menu-items'>
                    <ul>
                        <li><RiDashboard2Fill />   Dashboard</li>
                        <li><BsFillTagsFill />   Transactions</li>
                        <li><BsFillCalendarDateFill />   Schedules</li>
                        <li><BiUserCircle />   Users</li>
                        <li><AiFillSetting />   Settings</li>
                    </ul>
                </div>
                <div className='footer'>
                    <ul>
                        <li>Help</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className='right-container'>
                <Dashboard />
                <Activities />
                <div className='pie-value'>
                    <PieCharts />
                    <Schedule />
                </div>
            </div>
        </div>
    )
}

export default MenuBar