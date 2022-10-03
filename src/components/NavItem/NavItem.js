import React from 'react';

const NavItem = ({name, path}) => {
    return (
        <div>
            <a href={path}>{name}</a>
        </div>
    );
};

export default NavItem;