import React, {useContext} from 'react';
import {Context} from "../store/appContext.js"
import {useParams} from "react-router-dom"

const DetailsCard = () => {
    const {store} = useContext(Context);
    const params = useParams();
    console.log(params.id)

    return (
        <div className="container">
            <div className="card-details row">
                <img src="http://via.placeholder.com/800x600" className="card-img-top col-6" alt="..." />
                <div className="card-body col-6">
                    <p className="card-title">Nombre</p>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam assumenda doloribus incidunt molestias minima aliquam dolor in, dolores eaque repellat minus ipsa nihil sunt esse.</p>
                </div>
            </div>
            <hr />
            <div className="general-details row">
                <p className="col-2">
                    <strong>Name</strong>
                    <br />
                    texto de ejemplo
                </p>
                <p className="col-2">
                    <strong>Birth Year</strong>
                    <br />
                    texto de ejemplo
                </p>
                <p className="col-2">
                    <strong>Gender</strong>
                    <br />
                    texto de ejemplo
                </p>
                <p className="col-2">
                    <strong>Height</strong>
                    <br />
                    texto de ejemplo
                </p>
                <p className="col-2">
                    <strong>Skin Color</strong>
                    <br />
                    texto de ejemplo
                </p>
                <p className="col-2">
                    <strong>Eye Color </strong>
                    <br />
                    texto de ejemplo
                </p>
            </div>
        </div>
    );
};

export default DetailsCard;