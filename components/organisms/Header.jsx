import React from 'react';
import MainMenu from '../molecules/MainMenu';

const Header = ({ route }) => (
    <header className='menu'>
        <MainMenu showImage={ route != '/' ? true : false } />
    </header>
);

export default Header;