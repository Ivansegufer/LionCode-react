import React from 'react';
import Link from 'next/link';
import app_info from '../../app.info';
import { increaseDelay } from '../../utils/counterDelay';

const MainMenu = ({ showImage }) => {
    let delay = -100;
    const pages = app_info.pages;

    return (
        <nav className='navbar'>
            <ul className='links'>
                {
                    showImage 
                        ? <img src="/img/LionCode.png" width='40' alt="logo LionCode"/> : <></>
                }
                {
                    pages.map(page => {
                        return(
                            <li 
                                data-aos='zoom-in-left' 
                                data-aos-delay={delay = increaseDelay(delay, 200)}
                                className='link'
                                key={delay}
                            >
                                {
                                    page === 'Inicio' ? 
                                        <Link href={'/'}>
                                            <a>{page}</a>
                                        </Link> : 
                                        <Link href={`/${page.replace(' ', '')}`}>
                                            <a>{page}</a>
                                        </Link>
                                }
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}

export default MainMenu;