import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div className="card">
            <img src="http://via.placeholder.com/400x200" className="card-img" alt="imagen" />
            <div className="card-body">
                <p className="card-title">Nombre</p>
                <p className="card-text">
                    Gender: n/a   <br />
                    Hair-color: n/a  <br />
                    Eye-color: n/a  <br />
                </p>
                <Link to={`/details`}>
                    <button className="btn btn-primary">  Learn More!  </button>
                </Link>
                <button className="corazon btn btn-warning">
                    <i className="far fa-heart"></i>
                </button>
            </div>
        </div>
    );
};

export default Card;