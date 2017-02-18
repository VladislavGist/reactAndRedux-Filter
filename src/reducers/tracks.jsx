const initiaState = [];

let tracks;
export default tracks = (state = initiaState, action) => {
	switch (action.type) {
		case "ADD_TRACK":
			return [
				...state,
				action.payload
			];
		default:
			return state;
	}
}