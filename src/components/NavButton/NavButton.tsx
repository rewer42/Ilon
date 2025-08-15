import './navButton.css';
import React, {type JSX} from 'react';

interface NavButtonProps {
    href: string;
    children: React.ReactNode;
}

function NavButton({ href, children } : NavButtonProps): JSX.Element {

    return (
        <a href={ href } className='nav_button'>{ children }</a>
    );
}

export default NavButton;
