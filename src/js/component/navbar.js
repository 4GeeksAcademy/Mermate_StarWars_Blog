import React ,{useContext}from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">favorites</button>
				</Link>
				
				
				{store.favorites.map((list, index)=><p key={index}>{list}</p>)}

			</div>
		</nav>
	);
};
