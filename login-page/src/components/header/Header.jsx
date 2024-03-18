import React from 'react';
import { Container } from "reactstrap";
import './Header.css';

const navLinks = [
    {
        title: 'Home',
        url: '#'
    },
    {
        title: 'About',
        url: '#'
    },
    {
        title: 'Services',
        url: '#'
    },
    {
        title: 'Contact',
        url: '#'
    }
];

function Header() {
    return (
        <header>
            {/* Your header content goes here */}
            <Container>
                <div className="nav_bar">
                    <div className="nav_bar_logo">
                        <h2 className='d-flex align-items-center gap-1' id='h2'>
                            <span><i className="ri-file-user-line"></i></span> | RandomGlobal
                        </h2>
                    </div>
                    <div className="nav_bar_links">
                        <ul className="nav_list">
                            {
                                navLinks.map((item, index) => (
                                    <li className="nav_link" key={index}><a href={item.url}>{item.title}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="user_icon">
                        <span><i className="ri-user-fill"></i></span>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;
