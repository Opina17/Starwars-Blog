import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark">
			<div className="container">
			<Link to="/">
				<img src={logo} />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li className="mx-2">(empty)</li>
						{/* lista de los favoritos */}
					</ul>
				</div>
			</div>
			</div>
		</nav>
	);
};
