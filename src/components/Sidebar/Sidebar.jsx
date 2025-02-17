import React from 'react';
import { NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div data-testid="sidebar">
            <p>Subreddits</p>
            <div className='navlink-list'>
                <NavLink 
                    to="" 
                    className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}
                > Home </NavLink>
                <NavLink 
                    to="r/explainlikeimfive/" 
                    className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}
                > r/explainlikeimfive </NavLink>
                <NavLink 
                    to="r/hungary/" 
                    className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}
                > r/hungary </NavLink>
                <NavLink 
                    to="r/dataisbeautiful/" 
                    className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}
                > r/dataisbeautiful </NavLink>
                <NavLink 
                    to="r/pics/" 
                    className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}
                > r/pics </NavLink>
            </div>
            
        </div>

        
    );
};

export default Sidebar;