import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
    const [items, setItems] = useState([]);
    const { REACT_APP_API_ENDPOINT } = process.env;
    useEffect(() => {
        axios.get(`${REACT_APP_API_ENDPOINT}/items`)
            .then(response => {
                console.log(response.data)
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, []);

    const cardItem = (prd) => {
        return (
            <>
    <style>
        {`
            .btn.btn-outline-primary:hover {
                background-color: #365486 !important;
                color: white !important;
                border-radius: 20px;
            }
        `}
    </style>
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card my-5 py-4 border rounded" style={{ marginTop: "20px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={prd.img} className="card-img-top" alt={prd.Title}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h5 className="card-title">{prd.Title}</h5>
                            <div className="col-12 bg-dark text-white rounded">
                                <p className="lead">{prd.Price}</p>
                            </div>
                            <NavLink 
                                to={`/products/${prd.id}`} 
                                className="btn btn-outline-primary w-100" 
                                style={{ 
                                    transition: "background-color 0.3s, color 0.3s", 
                                    textDecoration: "none",
                                    color: "black",
                                    border: "none"
                                }}
                            >
                                Buy Now
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>

                );
    }

                return (
                <div>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 text-center">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                        {items.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default Product
