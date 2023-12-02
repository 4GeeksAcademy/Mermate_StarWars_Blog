import React ,{useEffect, useState,useContext} from "react";

import { Context } from "../store/appContext";

import { Starship } from "../component/starship";
import { Character} from "../component/characters";
import { Planet} from "../component/planets";

//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";



export const Home = () => {

	const {store, actions}= useContext((Context));

	
	return(

	
	<div className="text-center mt-5">

		<>

		  	<h1>Characters</h1>

			<div className="row flex row fle-nowrap" style={{overflowX:"auto"}}>

			{store.characters.map((item,index) =><Character key={item.url}
			uid={item.url}
			name={item.name}
			gender={item.gender}
			hair_color={item.hair_color}
			eye_color={item.eye_color}

			/>)}
			
			</div>  


			<h1>Planets</h1>

			<div className="row flex row fle-nowrap" style={{overflowX:"auto"}}>

			{store.planets.map((item,index) =><Planet key={item.url}
			uid={item.url}
			name={item.name}
			climate={item.climate}
			terrain={item.terrain}
			population={item.population}

			/>)}

			</div>  

			<h1>Starships</h1>

			<div className="row flex row fle-nowrap" style={{overflowX:"auto"}}>

			{store.naves.map((item,index) =><Starship key={item.url}
			uid={item.url}
			name={item.name}
			model={item.model}
			max_atmosphering_speed={item.max_atmosphering_speed}
			crew={item.crew}
			/>)}

			</div>  
	
			</>

	</div>

	);
}
	

