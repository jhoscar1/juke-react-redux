import {connect} from 'react-redux';
import Stations from '../components/Stations';

const getStations = (songs) => {

    const genres = {};
    songs.map((song) => {
        genres[song.genre] ? genres[song.genre].push(song) : genres[song.genre] = [song];
    });
    return genres;
}

const mapStateToProps = (state) => ({ stations: getStations(state.songs)});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Stations);