import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div>
            <div className="card">
                <img src="http://via.placeholder.com/400x200" className="card-img" alt="..." />
                <div className="card-body">
                    <p className="card-title">Nombre</p>
                    <p className="card-text">
                        Gender: {/* Genero de la persona */}  <br />
                        Hair-color: {/* Color de cabello de la persona */} <br />
                        Eye-color: {/* Color de ojos de la persona */} <br />
                    </p>
                    <Link to="/details">
                        <button className="btn btn-primary">Learn More!
                        </button>
                    </Link>
                    <button className="corazon btn btn-warning">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;