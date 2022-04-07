import React from "react";
import "../../styles/home.css";
import Card from "../component/Card.jsx";

export const Home = () => (
	<div className="container">
		<h1>Characters</h1>
		<div className="card-scroll">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		<h1>Planets</h1>
		<div className="card-scroll">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		<h1>Vehicles</h1>
		<div className="card-scroll">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</div>
);
