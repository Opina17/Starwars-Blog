import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const {store} = useContext(Context)
	return (
		<nav className="navbar navbar-dark">
			<div className="container">
			<Link to={`/`}>
				<img src={logo} />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle favorites" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorites == "" && <li className="ms-2">(empty)</li>}
					</ul>
				</div>
			</div>
			</div>
		</nav>
	);
};
