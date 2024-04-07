import React from 'react';
import { NavLink } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
import Login from './buttons/Login';

const Header = () => {
    return (
        <>
            <style>
                {`
                .active {
                    background-color: #7FC7D9;
                    border-radius: 30px;
                    color: white;
                }
                .navbar {
                    background-color: #ffffff;
                    padding: 10px;
                }
                .navbar-nav .nav-link {
                    margin-right: 10px;
                    padding: 8px 25px;
                }

                `}
            </style>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="navbar-nav me-auto ">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/products">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                        </li>
                    </div>
                    <span className="navbar-brand fw-bold">SellPhy</span>
                    <Login />
                    <CartBtn />
                </div>
            </nav>
        </>
    );
};

export default Header;
