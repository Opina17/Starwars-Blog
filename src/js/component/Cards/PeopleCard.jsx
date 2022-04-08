import React from 'react';
import { Link } from 'react-router-dom';

const PeopleCard = ({uid, properties}) => {
    return (
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
    );
};

export default PeopleCard;