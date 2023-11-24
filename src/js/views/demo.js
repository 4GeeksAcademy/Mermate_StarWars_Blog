import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

   function getSpaceships(){
	console.log("getSpaceships")
   }
	return (
		<div className="container">
			<ul className="list-group">
				{store.naves.map((item, index) => {
				
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							{item.name}
							<br></br>
							{item.uid}

						
							
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
