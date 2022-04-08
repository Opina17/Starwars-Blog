const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			endPoints: ["people", "planets", "vehicles"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			vehicles: JSON.parse(localStorage.getItem("vehicles")) || []
		},
		actions: {
			fetchApi: async () => {
				const store = getStore()
				if (!store.people.length) {
					for (let nature of store.endPoints) {
						try {
							let response = await fetch(`${store.urlBase}/${nature}`)
							if (response.ok) {
								let data = await response.json()
								data.results.map(async (item) => {
									let newResponse = await fetch(`${store.urlBase}/${nature}/${item.uid}`)
									if (newResponse.ok) {
										let newResult = await newResponse.json()
										setStore({
											...store,
											[nature]: [...store[nature], newResult.result]
										})
										localStorage.setItem(nature, JSON.stringify(store[nature]))
									}
								})
							}
						} catch (error) {
							console.log("Hubo un error:", error)
						}
					}
				}
			}
		}
	}
};

export default getState;
