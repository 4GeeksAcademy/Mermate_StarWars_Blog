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

			naves: [
				{
					name:"Millennium Falcon",
					uid:"10"
				},

				{
					name:"Death Star",
					uid:"9"
					
				}
			],
			characters:[
				{
					"name": "Luke Skywalker", 
					"eye_color": "Blue"
				},

				{
					"name": "C-3PO", 
					"eye_color": "yellow",
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			


			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				 //GET from the API
				
				
				
				


			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
