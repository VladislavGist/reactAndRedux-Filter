import {combineReducers} from "redux";

//reducers
import tracks from "./tracks.jsx";
import playlists from "./playlists.jsx";
import findTrack from "./findTrack.jsx";

//react-router-redux
import {routerReducer} from "react-router-redux"; 

export default combineReducers({
	routing: routerReducer,
	tracks,
	playlists,
	findTrack
});