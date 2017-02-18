let mockApiData = [
	{
		id: 1,
		name: "1 track"
	},
	{
		id: 2,
		name: "2 track"
	},
	{
		id: 3,
		name: "3 track"
	},
	{
		id: 4,
		name: "4 track"
	},
	{
		id: 5,
		name: "5 track"
	}
];

export const getTracks = () => {
	return dispatch => {
		setTimeout(() => {
			console.log("I got true it");
			dispatch({type: "FETCH_TRACKS_SUCCESS", payload: mockApiData});
		}, 2000)
	}
}