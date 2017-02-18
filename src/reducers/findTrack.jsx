const initialState = "";

let findTrack
export default findTrack = (state = initialState, action) => {
	switch(action.type) {
		case "FIND_TRACK":
			return [
				action.payload
			];
		default:
			return state;
	}
};