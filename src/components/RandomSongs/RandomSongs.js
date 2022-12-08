import '../../assets/css/Main.css';
import {RandomPlaylist} from './RandomSongs-styled'
import Playlist from '../Playlist/Playlist'

function RandomSongs() {
    return (
        <RandomPlaylist>
            <tittle>Your Songs</tittle>
            <Playlist />
        </RandomPlaylist>
    )
}
  
export default RandomSongs