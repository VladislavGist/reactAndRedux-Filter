import {combineReducers} from "redux";

//reducers
import tracks from "./tracks.jsx";
import playlists from "./playlists.jsx";
import findTrack from "./findTrack.jsx";

export default combineReducers({
	tracks,
	playlists,
	findTrack
});