import styled from "styled-components"

export const PlaylistStyled = styled.div`

    margin-top: 30px;;

    #timeline{
        position: relative;
        margin: 0 auto;
        width: 100%;
        height: 5px;
        background: red;
        border-radius: 5px;
        cursor: pointer;
        margin: 0 10px;;
        
    }
    #playhead{
        position: relative;
        z-index: 2;
        width: 0;
        height: 5px;
        border-radius: 5px;
        background: white;
    }


    .current-song {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    z-index: 100;
    background: #181818;
    padding: 5px 30px;
    height: 90px;
    
    }
    .song-info {
        width: 330px;
        display: flex;
        align-items: center;
    }
    .info {
        margin-left: 10px;
    }
    .img-wrap {
        height: 60px;
    }
    .img-wrap img {
        height: 100%;
        
    }
    .time-controls {
        width: calc(100% - 330px);
    }
    .time {
        display: flex;
        align-items: center;
        
    }
    .controls {
        text-align: center;
        margin-bottom: 10px;
    }
    .controls button {
        margin: 0 10px;
    }

    .track  {
        height: 120px;
        margin-bottom: 20px;
        display: flex;
    }

    .track img {
        height: 100%;
    }

    .track-discr {
        margin-left: 20px;
        
    }
    .track-discr > div {
        margin-bottom: 10px;
    }
  
`
