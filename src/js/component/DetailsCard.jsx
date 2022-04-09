import React from 'react';
import propTypes from 'prop-types';

const DetailsCard = ({ nature, properties }) => {
    return (
        <>
            {nature == "people" ? (
                <>
                    <div className="card-details row">
                        <img src="http://via.placeholder.com/800x600" className="card-img-top col-6" alt="..." />
                        <div className="card-body col-6">
                            <p className="card-title">{properties.name}</p>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam assumenda doloribus incidunt molestias minima aliquam dolor in, dolores eaque repellat minus ipsa nihil sunt esse.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="general-details row">
                        <p className="col-2">
                            <strong>Name</strong>
                            <br />
                            {properties.name}
                        </p>
                        <p className="col-2">
                            <strong>Birth Year</strong>
                            <br />
                            {properties.birth_year}
                        </p>
                        <p className="col-2">
                            <strong>Gender</strong>
                            <br />
                            {properties.gender}
                        </p>
                        <p className="col-2">
                            <strong>Height</strong>
                            <br />
                            {properties.height}
                        </p>
                        <p className="col-2">
                            <strong>Skin Color</strong>
                            <br />
                            {properties.skin_color}
                        </p>
                        <p className="col-2">
                            <strong>Eye Color </strong>
                            <br />
                            {properties.eye_color}
                        </p>
                    </div>
                </>
            ) : nature == "planets" ? (
                <>
                    <div className="card-details row">
                        <img src="http://via.placeholder.com/800x600" className="card-img-top col-6" alt="..." />
                        <div className="card-body col-6">
                            <p className="card-title">{properties.name}</p>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam assumenda doloribus incidunt molestias minima aliquam dolor in, dolores eaque repellat minus ipsa nihil sunt esse.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="general-details row">
                        <p className="col-2">
                            <strong>Name</strong>
                            <br />
                            {properties.name}
                        </p>
                        <p className="col-2">
                            <strong>Created</strong>
                            <br />
                            {properties.created}
                        </p>
                        <p className="col-2">
                            <strong>Diameter</strong>
                            <br />
                            {properties.diameter}
                        </p>
                        <p className="col-2">
                            <strong>Gravity</strong>
                            <br />
                            {properties.gravity}
                        </p>
                        <p className="col-2">
                            <strong>Population</strong>
                            <br />
                            {properties.population}
                        </p>
                        <p className="col-2">
                            <strong>Terrain</strong>
                            <br />
                            {properties.terrain}
                        </p>
                    </div>
                </>
            ) : nature == "vehicles" ? (
                <>
                    {console.log(nature)}
                    <div className="card-details row">
                        <img src="http://via.placeholder.com/800x600" className="card-img-top col-6" alt="..." />
                        <div className="card-body col-6">
                            <p className="card-title">{properties.name}</p>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam assumenda doloribus incidunt molestias minima aliquam dolor in, dolores eaque repellat minus ipsa nihil sunt esse.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="general-details row">
                        <p className="col-2">
                            <strong>Name</strong>
                            <br />
                            {properties.name}
                        </p>
                        <p className="col-2">
                            <strong>Created</strong>
                            <br />
                            {properties.created}
                        </p>
                        <p className="col-2">
                            <strong>Length</strong>
                            <br />
                            {properties.length}
                        </p>
                        <p className="col-2">
                            <strong>Manufactured</strong>
                            <br />
                            {properties.manufactured}
                        </p>
                        <p className="col-2">
                            <strong>Model</strong>
                            <br />
                            {properties.model}
                        </p>
                        <p className="col-2">
                            <strong>Passengers</strong>
                            <br />
                            {properties.passengers}
                        </p>
                    </div>
                </>
            ) : (
                <div className="d-flex align-items-center m-5">
                    <strong>Loading...</strong>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
            )}

        </>
    );
};

DetailsCard.propTypes = {
    nature: propTypes.string,
    properties: propTypes.object
}

export default DetailsCard;