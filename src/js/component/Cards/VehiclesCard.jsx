import React from 'react';
import { Link } from "react-router-dom"

const VehiclesCard = ({ uid, properties }) => {
    return (
        <div className="card">
            <img src="http://via.placeholder.com/400x200" className="card-img" alt="imagen" />
            <div className="card-body">
                <p className="card-title">{properties.name}</p>
                <p className="card-text">
                    Model: {properties.model}   <br />
                    Passengers: {properties.passengers} <br />
                    Price: {properties.cost_in_credits}
                </p>
                <div className="endButtons">
                    <Link to={`/details/${uid}`}>
                        <button className="btn btn-primary">  Learn More!  </button>
                    </Link>
                    <button className="corazon btn btn-warning">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VehiclesCard;