import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="Customers">Customers</Link></li>
                <li><Link to="CustomersDetails">CustomersDetails</Link></li>
                <li><Link to="CustomersInfo">CustomersInfo</Link></li>
                <li><Link to="CustomersSales">CustomersSales</Link></li>
                <li><Link to="login">Login</Link></li>
                <li><Link to="profile">Profile</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;