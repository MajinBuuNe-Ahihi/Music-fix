import '../assets/css/Main.css'

import TopAlbums from "../components/TopAlbums/TopAlbums"
import RandomSongs from "../components/RandomSongs/RandomSongs"


function Home() {
    return (
        <div className="constainer">
            <TopAlbums />
            <RandomSongs />
        </div>
    )
}

export default Home