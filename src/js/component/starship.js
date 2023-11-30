import React ,{useContext}from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Starship = (props) => {

  const { store, actions } = useContext(Context);

	return (
        <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">This is a short description of Starwars' Starship</p>
          <p className="card-text"> Model:{props.model}</p>
          <p className="card-text">Speed: {props.max_atmosphering_speed}</p>
          <p className="card-text">Crew: {props.crew}</p>

         
          <Link className="btn btn-primary" to={"/single/1"}>
						<span>See More</span>
					</Link>
          <button onClick={()=>actions.changeMessage(props.name)}>Like</button>

        </div>
      </div>
	);
};