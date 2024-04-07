import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state) => state.addItem);

    return (
        <>
            <style>
                {`
                .cart-btn {
                    font-size: 16px;
                    border-radius: 20px;
                    padding: 8px 15px;
                    transition: all 0.3s ease;
                }

                .cart-btn:hover {
                    background-color: #7FC7D9;
                    color: white;
                    border-color: #7FC7D9;
                }
                `}
            </style>
            <NavLink to="/cart" className="cart-btn btn ms-2">
                <span className="me-1"></span> Cart ({state.length})
            </NavLink>
        </>
    );
};

export default CartBtn;
