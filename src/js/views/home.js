import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Card from "../component/Card.jsx";

export const Home = () => (
	<div className="container">
		<h1>Characters</h1>
		<Card />
	</div>
);
