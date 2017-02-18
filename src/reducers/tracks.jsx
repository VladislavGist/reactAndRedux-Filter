const initiaState = [
	{
		id: "1234",
		name: "First track"
	}
];

let tracks;
export default tracks = (state = initiaState, action) => {
	switch (action.type) {
		case "ADD_TRACK":
			return [
				...state,
				action.payload
			];
		case "FETCH_TRACKS_SUCCESS":
			return action.payload;
		default:
			return state;
	}
}