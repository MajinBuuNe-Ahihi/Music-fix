import { duration } from "@mui/material";
import React,{ useImperativeHandle } from "react"
import { useRef } from "react"

const AudioCustom = ( props,ref) => {
  const playerRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      playerRef.current.play();
    },
    pause() {
      playerRef.current.pause();
    },
    load() {
      playerRef.current.load();
    },
    duration() {
      return playerRef.current.duration;
    },
    currentTime() {
      return playerRef.current.currentTime;
    },
    setCurrentTime(time) {
      playerRef.current.currentTime = time;
    }

  }))

  return  (<audio ref={playerRef}>
            <source src={ props.currentSong } type="audio/ogg"/>
          </audio>)
  }

export default React.forwardRef(AudioCustom)