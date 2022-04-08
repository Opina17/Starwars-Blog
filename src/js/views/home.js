import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext.js"

export const Home = () => {
	const {store} = useContext(Context)

	return (
		<div className="container col-12">
			<h1>Characters:</h1>
			<div className="card-scroll row flex-nowrap">
				{store.people.map((person) =>{
					return(
					<Card key={person.uid} {...person} />
					);
				})}
			</div>

			<h1>Planets:</h1>
			<div className="card-scroll row flex-nowrap">
				{store.planets.map((planet) =>{
					return(
					<Card key={planet.uid} {...planet} />
					);
				})}
			</div>
		</div>
	);
};

