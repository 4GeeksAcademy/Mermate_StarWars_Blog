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

		<div className="row flex row fle-nowrap" style={{overflowX:"auto"}}>

		{store.naves.map((item,index) =><Starship key={item.url}
		   uid={item.url}
		   name={item.name}
		   model={item.model}
		   max_atmosphering_speed={item.max_atmosphering_speed}
		   crew={item.crew}
		   />)}

		   </div>
		
				
				
				
				
									

		  
	
	</div>

	);
}
	

