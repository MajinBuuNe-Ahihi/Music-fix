// import React from "react";
// import { useEffect } from "react";
// import '../../assets/css/Main.css';
// import {PlaylistStyled} from './Playlist-styled'


// class Playlist extends React.Component {

//     state = {
//         index: 3,
//         currentTime: '0:00',
//         musicList: [
//             {
//                 name: 'Blank Space',
//                 artist: 'Taylor Swift',
//                 audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
//                 img: 'music/thumbnails/s1.jpg',
//                 duration: '2:02'
//             },
//             {
//                 name: 'Girl',
//                 artist: 'SYML',
//                 audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
//                 img: 'music/thumbnails/s2.jpg',
//                 duration: '2:02'
//             },
//             {
//                 name: 'Habits (Stay Height)',
//                 artist: 'Tove Lo',
//                 audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
//                 img: 'music/thumbnails/s3.jpg',
//                 duration: '2:02'
//             },
//             {
//                 name: 'Love Come Around',
//                 artist: 'Elina',
//                 audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
//                 img: 'music/thumbnails/s4.jpg',
//                 duration: '2:02'
//             },
//             {
//                 name: 'Roses',
//                 artist: 'The Chainsmokers',
//                 audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
//                 img: 'music/thumbnails/s5.jpg',
//                 duration: '2:02'
//             },
//             {
//                 name: 'Sunflower',
//                 artist: 'Post Malone ft Swae Lee',
//                 audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
//                 img: 'music/thumbnails/s6.jpg',
//                 duration: '2:02'
//             },
//             {
//                 name: 'The Scientist',
//                 artist: 'Coldplay',
//                 audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
//                 img: 'music/thumbnails/s7.jpg',
//                 duration: '2:02'
//             },
//         ],
//         pause: false,
//     };
  
  
//     componentDidMount() {
//         this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);
//         this.playerRef.addEventListener("ended", this.nextSong, false);
//         this.timelineRef.addEventListener("click", this.changeCurrentTime, false);
//         this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);
//         this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);
//     }
  
//     componentWillUnmount() {
//         this.playerRef.removeEventListener("timeupdate", this.timeUpdate);
//         this.playerRef.removeEventListener("ended", this.nextSong);
//         this.timelineRef.removeEventListener("click", this.changeCurrentTime);
//         this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);
//         this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);
//     }
  
//     changeCurrentTime = (e) => {
//         const duration = this.playerRef.duration;
        
//         const playheadWidth = this.timelineRef.offsetWidth;
//         const offsetWidht = this.timelineRef.offsetLeft;
//         const userClickWidht = e.clientX - offsetWidht;
    
//         const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;
    
//         this.playheadRef.style.width = userClickWidhtInPercent + "%";
//         this.playerRef.currentTime = (duration * userClickWidhtInPercent)/100;
//     }
  
//     hoverTimeLine = (e) => {
//         const duration = this.playerRef.duration;
        
//         const playheadWidth = this.timelineRef.offsetWidth
        
//         const offsetWidht = this.timelineRef.offsetLeft;
//         const userClickWidht = e.clientX - offsetWidht;
//         const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;
    
//         if(userClickWidhtInPercent <= 100){
//         this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
//         }
        
//         const time = (duration * userClickWidhtInPercent)/100;
        
//         if( (time >=0) && (time <= duration)){
//         this.hoverPlayheadRef.dataset.content = this.formatTime(time);
//         }
//     }
    
//     resetTimeLine = () => {
//         this.hoverPlayheadRef.style.width = 0;
//     }
    
//     timeUpdate = () => {
//         const duration = this.playerRef.duration;
//         const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
//         const playPercent = 100 * (this.playerRef.currentTime / duration);
//         this.playheadRef.style.width = playPercent + "%";
//         const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));
//         this.setState({
//         currentTime
//         });
//     }
  
//     formatTime = (currentTime) =>{
//         const minutes = Math.floor(currentTime / 60);
//         let seconds = Math.floor(currentTime % 60);
    
//         seconds = (seconds >= 10) ? seconds : "0" + seconds % 60;
        
//         const formatTime = minutes + ":" +  seconds
    
//         return formatTime;
//     }
  
//     updatePlayer = () =>{
//         const { musicList, index } = this.state;
//         const currentSong = musicList[index];
//         const audio = new Audio(currentSong.audio);
//         this.playerRef.load();
//     }
    
//     nextSong = () => {
//         const { musicList, index, pause } = this.state;
        
//         this.setState({
//             index: (index + 1) % musicList.length
//         });
//         this.updatePlayer();
//         if(pause){
//             this.playerRef.play();
//         }
//     };
  
//     prevSong = () => {
//         const { musicList, index, pause } = this.state;
        
//         this.setState({
//             index: (index + musicList.length - 1) % musicList.length
//         });
//         this.updatePlayer();
//         if(pause){
//             this.playerRef.play();
//         }
//     };
     
  
//     playOrPause = () =>{
//         const { musicList, index, pause } = this.state;
//         const currentSong = musicList[index];
//         const audio = new Audio(currentSong.audio);
//         if( !this.state.pause ){
//             this.playerRef.play();
//         }else{
//             this.playerRef.pause();
//         }
//         this.setState({
//             pause: !pause
//         })
//     }
    
//     clickAudio = (key) =>{
//         const { pause } = this.state;
        
//         this.setState({
//             index: key
//         });
        
//         this.updatePlayer();
//         if(pause){
//             this.playerRef.play();
//         }
//     }
  
    
//     render() {
//         const { musicList, index, currentTime, pause } = this.state;
//         const currentSong = musicList[index];
//         return (
//             <PlaylistStyled>
//                 <div className="current-song">
//                     <audio ref={ref => this.playerRef = ref}>
//                         <source src={ currentSong.audio } type="audio/ogg"/>
//                     </audio>
//                     <div className="song-info">
//                         <div className="img-wrap">
//                             <img src={ currentSong.img }/>
//                         </div>
//                         <div className="info">
//                             <div className="song-name">{ currentSong.name }</div>
//                             <div className="song-artist">{ currentSong.artist }</div>
//                         </div>
//                     </div>

//                     <div className="time-controls">
//                         <div className="controls">
//                             <button onClick={this.prevSong} className="prev prev-next current-btn"><i className="fas fa-backward"></i></button>
                            
//                             <button onClick={this.playOrPause} className="play current-btn">
//                                 {
//                                 (!pause) ? <i className="fas fa-play"></i>
//                                 :<i class="fas fa-pause"></i>
//                                 }
//                             </button>
//                             <button onClick={this.nextSong} className="next prev-next current-btn"><i className="fas fa-forward"></i></button>
//                         </div>
                        
//                         <div className="time">
//                             <div className="current-time">{ currentTime }</div>
//                             <div ref={ref => this.timelineRef = ref} id="timeline">
//                                 <div ref={ref => this.playheadRef = ref} id="playhead"></div>
//                                 <div ref={ref => this.hoverPlayheadRef = ref} class="hover-playhead" data-content="0:00"></div>
//                             </div>
//                             <div className="end-time">{ currentSong.duration }</div>
//                         </div>
//                     </div>
                    
        
                    
//                 </div>

//                 <div className="play-list" >
//                     {musicList.map( (music, key=0) =>
//                         <div key={key}
//                             onClick={()=>this.clickAudio(key)}
//                             className={"track " +
//                                 (index === key && !pause ?'current-audio':'') +
//                                 (index === key && pause ?'play-now':'')}
//                         >
                            
//                             <img className="track-img" src={music.img}/>
//                             <div className="track-discr" >
//                                 <div className="track-name" >{music.name}</div>
//                                 <div className="track-author" >{music.artist}</div>
//                                 <div className="track-duration" >
//                                     {(index === key)
//                                         ?currentTime
//                                         :music.duration
//                                     }
//                                 </div>
//                             </div>
                            
//                         </div>
//                     )}
//                 </div>
//             </PlaylistStyled>
//         )
//     }
// }
  
// export default Playlist

import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import '../../assets/css/Main.css';
import AudioCustom from "./AudioCustom";
import {PlaylistStyled} from './Playlist-styled'

const   musicList = [
            {
                name: 'Blank Space',
                artist: 'Taylor Swift',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                img: 'music/thumbnails/s1.jpg',
                duration: '2:02'
            },
            {
                name: 'Girl',
                artist: 'SYML',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                img: 'music/thumbnails/s2.jpg',
                duration: '2:02'
            },
            {
                name: 'Habits (Stay Height)',
                artist: 'Tove Lo',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                img: 'music/thumbnails/s3.jpg',
                duration: '2:02'
            },
            {
                name: 'Love Come Around',
                artist: 'Elina',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                img: 'music/thumbnails/s4.jpg',
                duration: '2:02'
            },
            {
                name: 'Roses',
                artist: 'The Chainsmokers',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                img: 'music/thumbnails/s5.jpg',
                duration: '2:02'
            },
            {
                name: 'Sunflower',
                artist: 'Post Malone ft Swae Lee',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                img: 'music/thumbnails/s6.jpg',
                duration: '2:02'
            },
            {
                name: 'The Scientist',
                artist: 'Coldplay',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                img: 'music/thumbnails/s7.jpg',
                duration: '2:02'
            },
        ];

const Playlist = () => {
    const [index, setIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState('0:0');
    const [pause, setPause] = useState(false);
    const playerRef = useRef();
    const timelineRef = useRef();
    const playheadRef = useRef();
    const hoverPlayheadRef = useRef();

    const changeCurrentTime = (e) => {
        const duration = playerRef.current.duration();
        const playheadWidth = timelineRef.current.offsetWidth;
        const offsetWidht = timelineRef.current.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;
        const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;
       playheadRef.current.style.width = userClickWidhtInPercent + "%";
       playerRef.current.setCurrentTime((duration * userClickWidhtInPercent)/100);
    }

    const   hoverTimeLine = (e) => {
        const duration = playerRef.current.duration();
        
        const playheadWidth = timelineRef.current.offsetWidth
        
        const offsetWidht = timelineRef.current.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;
        const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;
    
        if(userClickWidhtInPercent <= 100){
        hoverPlayheadRef.current.style.width = userClickWidhtInPercent + "%";
        }
        
        const time = (duration * userClickWidhtInPercent)/100;
        
        if( (time >=0) && (time <= duration)){
        hoverPlayheadRef.current.dataset.content = formatTime(time);
        }
    }


    const resetTimeLine = () => {
        hoverPlayheadRef.current.style.width = 0;
    }

    const timeUpdate = () => {
        const duration = playerRef.current.duration();
        const timelineWidth = timelineRef.current.offsetWidth - playheadRef.current.offsetWidth;
        const playPercent = 100 * (playerRef.current.currentTime() / duration);
        playheadRef.current.style.width = playPercent + "%";
        const currentTime = formatTime(parseInt(playerRef.current.currentTime()));
        setCurrentTime(
            currentTime
        );
    }
    
    const formatTime = (currentTime) => {
        const minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds % 60;
        const formatTime = minutes + ":" +  seconds
        return formatTime;
    }

    const updatePlayer = () =>{
        playerRef.current.load();
    }

    const nextSong = () => { 
        setIndex((index + 1) % musicList.length)
        updatePlayer();
        if(pause){
            playerRef.current.play();
        }
    };
     const prevSong = () => {
        setIndex((index + musicList.length - 1) % musicList.length);
        updatePlayer();
        if(pause){
            playerRef.current.play();
        }
    };
    const playOrPause = () =>{
        if( !pause ){
            playerRef.current.play();
        }else{
           playerRef.current.pause();
        }
        setPause(pre => !pre)
    }
    const  clickAudio = (key) =>{
      setIndex(key)
       updatePlayer();
        if(pause){
            playerRef.current.play();
        }
    }
    const currentSong = musicList[index];

    return (
            <PlaylistStyled>
                <div className="current-song" onTimeUpdate={timeUpdate} onEnded={nextSong} >
                <AudioCustom ref={playerRef} currentSong={currentSong.audio} ></AudioCustom>
                    <div className="song-info">
                        <div className="img-wrap">
                            <img src={ currentSong.img }/>
                        </div>
                        <div className="info">
                            <div className="song-name">{ currentSong.name }</div>
                            <div className="song-artist">{ currentSong.artist }</div>
                        </div>
                    </div>

                    <div className="time-controls">
                        <div className="controls">
                            <button onClick={prevSong} className="prev prev-next current-btn"><i className="fas fa-backward"></i></button>
                            
                            <button onClick={playOrPause} className="play current-btn">
                                {
                                (!pause) ? <i className="fas fa-play"></i>
                                :<i class="fas fa-pause"></i>
                                }
                            </button>
                            <button onClick={nextSong} className="next prev-next current-btn"><i className="fas fa-forward"></i></button>
                        </div>
                        
                        <div className="time">
                            <div className="current-time">{ currentTime }</div>
                            <div ref={timelineRef} id="timeline" onClick={changeCurrentTime} onMouseMove={hoverTimeLine} onMouseOut={resetTimeLine}>
                                <div ref={playheadRef} id="playhead"></div>
                                <div ref={hoverPlayheadRef} className="hover-playhead" data-content="0:00"></div>
                            </div>
                            <div className="end-time">{ currentSong.duration }</div>
                        </div>
                    </div>
                </div>

                <div className="play-list" >
                    {musicList.map( (music, key=0) =>
                        <div key={key}
                            onClick={()=>this.clickAudio(key)}
                            className={"track " +
                                (index === key && !pause ?'current-audio':'') +
                                (index === key && pause ?'play-now':'')}
                        >
                            
                            <img className="track-img" src={music.img}/>
                            <div className="track-discr" >
                                <div className="track-name" >{music.name}</div>
                                <div className="track-author" >{music.artist}</div>
                                <div className="track-duration" >
                                    {(index === key)
                                        ?currentTime
                                        :music.duration
                                    }
                                </div>
                            </div>
                            
                        </div>
                    )}
                </div>
            </PlaylistStyled>
        )
}
export default Playlist;