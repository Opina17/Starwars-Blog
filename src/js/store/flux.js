const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			getPeople: async () => {
				try {
					const store = getStore()
					let response = await fetch(`${store.urlBase}/people`)
					let data = await response.json()
					setStore({
						...store,
						people: data.results
					})
				} catch (error) {
					console.log("Hubo un error:", error)
				}
			},
			getPlanets: async () =>{
				try{
					const store = getStore()
					let response = await fetch(`${store.urlBase}/planets`)
					let data = await response.json()
					setStore({
						...store,
						planets: data.results
					})
				}catch(error){
					console.log("Hubo un error:", error)
				}
			},
			getVehicles: async () =>{
				try{
					const store = getStore()
					let response = await fetch(`${store.urlBase}/vehicles`)
					let data = await response.json()
					setStore({
						...store,
						vehicles: data.results
					})
				}catch(error){
					console.log("Hubo un error", error)
				}
			}
		}
	};
};

export default getState;
