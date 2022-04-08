import React, { useContext } from "react";
import "../../styles/home.css";
import PeopleCard from "../component/Cards/PeopleCard.jsx";
import PlanetsCard from "../component/Cards/PlanetsCard.jsx";
import VehiclesCard from "../component/Cards/VehiclesCard.jsx";
import { Context } from "../store/appContext.js";


export const Home = () => {
	const {store} = useContext(Context)

	return (
		<div className="container col-12">
			<h1>Characters:</h1>
			<div className="card-scroll row flex-nowrap">
				{store.people.map((person) =>{
					return(
					<PeopleCard key={person.uid} {...person} />
					);
				})}
			</div>

			<h1>Planets:</h1>
			<div className="card-scroll row flex-nowrap">
				{store.planets.map((planet) =>{
					return(
					<PlanetsCard key={planet.uid} {...planet} />
					);
				})}
			</div>

			<h1>Vehicles:</h1>
			<div className="card-scroll row flex-nowrap">
				{store.vehicles.map((vehicle) =>{
					return(
						<VehiclesCard key={vehicle.uid} {...vehicle} />
					);
				})}
			</div>
		</div>
	);
};

