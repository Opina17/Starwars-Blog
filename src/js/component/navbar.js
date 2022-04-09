import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-dark">
			<div className="container">
				<Link to={`/`}>
					<img src={logo} />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle favorites"
							type="button"
							id="dropdownMenuButton1"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Favorites
							<span className="badge bg-secondary mx-1">
								{store.favorites.length}
							</span>
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

							{/* Si no hay favorites muestra esto */}
							{store.favorites == "" && <li className="ms-2">(empty)</li>}

							{/* Mostrar los favoritos */}
							{store.favorites.map((item) => {
								console.log(item)
								return (
									<li key={item._id} className="ms-2 d-flex">
										{item.properties.name}
										<button
											type="button"
											className="delete"
											onClick={() => actions.deleteFavorite(item._id)}>
											<i className="fas fa-trash"></i>
										</button>
									</li>
								);
							})}

						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
