import React ,{useEffect, useState,useContext} from "react";

import { Context } from "../store/appContext";

import { Starship } from "../component/starship";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";



export const Home = () => {

	const {store, actions}= useContext((Context));

	
	return(

	<div className="text-center mt-5">

		<h1>Starship</h1>

		{store.naves.map((item) =><Starship key={item.uid} name={item.name}/>)}
	
	</div>

	);
}
	

