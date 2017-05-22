import { connect } from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player';

const getSongsByGenre = (songs, genreName) => {
    return songs.filter((song) => song.genre === genreName).map(convertSong);
}

const mapStateToProps = (state, ownProps) => ({
    genreName: ownProps.params.genreName,
    songs: getSongsByGenre(state.songs, ownProps.params.genreName),
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong
})

const mapDispatchToProps = (dispatch) => ({
    toggleOne: (song, list) => dispatch(toggleSong(song, list))
})

export default connect(mapStateToProps, mapDispatchToProps)(Station);