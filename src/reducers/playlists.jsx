const initialState = [
	"myPlaylist"
];

let playlists;

export default playlists = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PLAYALIST":
			return [
				...state,
				action.payload
			];
		default:
			return state;
	}
}