import React, { useState } from 'react';
import NavItem from '../NavItem/NavItem';
import { Bars3Icon , XMarkIcon} from '@heroicons/react/24/solid';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const menus = [
        {id:1, name:'Home', path:'/home'},
        {id:2, name:'Products', path:'/products'},
        {id:3, name:'Prices', path:'/prices'},
        {id:4, name:'Contact', path:'/contact'},
        {id:5, name:'About', path:'/about'}
    ]
    return (
        <div className='bg-slate-800 text-white py-5 px-20 flex items-center justify-between  overflow-hidden  relative'>

            <div className='flex items-center'>
                <p className='text-5xl font-bold'>.tasan </p>   
            </div>

            <div className={`gap-5 flex`}>
                {
                    menus.map((menu, idx) => <NavItem key={idx} name={menu.name} path = {menu.path}></NavItem>)
                }
            </div>

            <div onClick={()=> setToggle(!toggle)} className = 'block lg:hidden' >
                {toggle ? <Bars3Icon className="h-6 w-6 text-blue-500"/> : <XMarkIcon className="h-6 w-6 text-blue-500"/>}
            </div>
        </div>
    );
};

export default Navbar;