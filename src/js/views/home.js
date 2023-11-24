import React ,{useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Starship } from "../component/starship";


export const Home = () => {

	const[ starships, setStarships]= useState([])


	useEffect(()=>{
		//console.log( "home is uploaded")

   //GET from the API

      fetch("https://www.swapi.tech/api/starships")
	  .then((response=> response.json()))
	  .then((data)=> setStarships(data.results))
      //.then((data)=>console.log(data.results))

	})

	return(

	<div className="text-center mt-5">

		<h1>Starship</h1>


		{starships.map((item) =><Starship key={item.uid} name={item.name}/>)}
		

		<h1> Spaceships</h1>
		
		<Starship name="props1"/>
		<Starship  name="props2"/>
		<Starship  name="props3"/>

	
	</div>

	);
}
	

