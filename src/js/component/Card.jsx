import propTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom"

const Card = ({ nature, properties, uid }) => {
    return (
        <>
            {nature === "people" ? (
                <div className="card">
                    <img src="http://via.placeholder.com/400x200" className="card-img" alt="imagen" />
                    <div className="card-body">
                        <p className="card-title">{properties.name}</p>
                        <p className="card-text">
                            Gender: {properties.gender}   <br />
                            Hair-color: {properties.hair_color}  <br />
                            Eye-color: {properties.eye_color}  <br />
                        </p>
                        <Link to={`/details/${uid}`}>
                            <button className="btn btn-primary">  Learn More!  </button>
                        </Link>
                        <button className="corazon btn btn-warning">
                            <i className="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            ) : nature === "planets" ? (
                <div className="card">
                    <img src="http://via.placeholder.com/400x200" className="card-img" alt="imagen" />
                    <div className="card-body">
                        <p className="card-title">{properties.name}</p>
                        <p className="card-text">
                            Climate: {properties.climate}   <br />
                            Gravity: {properties.gravity}  <br />
                            Population:  {properties.population} <br />
                        </p>
                        <Link to={`/details/${uid}`}>
                            <button className="btn btn-primary">  Learn More!  </button>
                        </Link>
                        <button className="corazon btn btn-warning">
                            <i className="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            ) : nature === "vehicles" ? (
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
            ) : (
                <div className="d-flex align-items-center m-5">
                    <strong>Loading...</strong>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
            )}
        </>
    );
};

Card.propTypes = {
    nature: propTypes.string,
    properties: propTypes.object
}

export default Card;