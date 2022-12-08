import Slider from "react-slick";
import {Link} from 'react-router-dom';

import '../../assets/css/Main.css';
import {SlideAlbums} from './TopAlbums-styled'
import ab1 from "../../assets/album-cover/ab1.jpg"
import ab2 from "../../assets/album-cover/ab2.jpg"
import ab3 from "../../assets/album-cover/ab3.jpg"
import ab4 from "../../assets/album-cover/ab4.jpg"
import ab5 from "../../assets/album-cover/ab5.jpg"
import ab6 from "../../assets/album-cover/ab6.jpg"

function TopAlbums() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    return (
        <SlideAlbums>
            <div className="topTitle">Featured albums</div>
            <Slider {...settings}>
                <div className="abItem">
                    <Link to="/">
                        <div className="abCover"><img src={ab1}></img></div>
                        <div className="abName">Memories... Do Not Open</div>
                        <div className="abArtist">The Chainsmokers</div>
                    </Link>
                </div>
                <div className="abItem">
                    <Link to="/">
                        <div className="abCover"><img src={ab2}></img></div>
                        <div className="abName">Meteora </div>
                        <div className="abArtist">Linkin Park</div>
                    </Link>
                </div>
                <div className="abItem">
                    <Link to="/">
                        <div className="abCover"><img src={ab3}></img></div>
                        <div className="abName">Mylo Xyloto</div>
                        <div className="abArtist">Coldplay</div>
                    </Link>
                </div>
                <div className="abItem">
                    <Link to="/">
                        <div className="abCover"><img src={ab4}></img></div>
                        <div className="abName">Pure Heroine</div>
                        <div className="abArtist">Lorde</div>
                    </Link>
                </div>
                <div className="abItem">
                    <Link to="/">
                        <div className="abCover"><img src={ab5}></img></div>
                        <div className="abName">X</div>
                        <div className="abArtist">Ed Sherran</div>
                    </Link>
                </div>
                <div className="abItem">
                    <Link to="/">
                        <div className="abCover"><img src={ab6}></img></div>
                        <div className="abName">Young Heath</div>
                        <div className="abArtist">Birdy</div>
                    </Link>
                </div>
            </Slider>
        </SlideAlbums>
    )
}



export default TopAlbums