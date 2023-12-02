const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			characters:[],

			planets:[],
			
			naves: [],
			

			//message:"initialize from flux",

			favorites:[],

			
		},
		actions: {
			// Use getActions to call a function within a fuction

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			// function add Starships 

			changeMessage: (starshipName) => {
				console.log("changeMessage");

				setStore({ message: starshipName });

				//get the store
				const store = getStore();

				// conditional 

				if(store.favorites.includes(starshipName)){
					console.log("it is in the list")
					//delete from the list
					setStore({ favorites: [...store.favorites.filter((added)=>added!=starshipName)] });


				} else{
					console.log(" it is Not in the list")

					 // shows the name of the starships save as a favorite
				setStore({ favorites: [...store.favorites , starshipName ] });

				}
           
				console.log(store.favorites)
			},


			loadSomeData: () => {
				
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			
				fetch("https://swapi.dev/api/people/")
				.then((response=> response.json()))
				.then((data)=> setStore({ characters: data.results })
				)


							
				fetch("https://swapi.dev/api/planets/")
				.then((response=> response.json()))
				.then((data)=> setStore({ planets: data.results })
				)


				fetch("https://swapi.dev/api/starships/")
				.then((response=> response.json()))
				.then((data)=> setStore({ naves: data.results })
				)

				//.then((data)=>console.log(data.results))
				


			},
			//changeColor: (index, color) => {
				//get the store
				//const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				//const demo = store.demo.map((elm, i) => {
				//	if (i === index) elm.background = color;
					//return elm;
				//});

				//reset the global store
				//setStore({ demo: demo });
			//}
		}
	};
};

export default getState;
