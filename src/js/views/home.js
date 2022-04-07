import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext.js"

export const Home = () => {
	const {store} = useContext(Context)

	return (
		<div className="container">
			<h1>Characters:</h1>
			<div className="card-scroll">
				<Card />
			</div>
		</div>
	);
};

