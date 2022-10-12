import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=''>
            <div className="logo site_name">
                <Link className='text-link' to='/'>Web Quiz</Link>
            </div>
            <div className="nav_item">
                <Link className='text-link' to='/'>Home</Link>
                <Link className='text-link' to='/topics'>Topics</Link>
                <Link className='text-link' to='/statistic'>Statistic</Link>
                <Link className='text-link' to='/blog'>Blog</Link>
            </div>

        </nav>
    );
};

export default Header;