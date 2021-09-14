import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import './Playlist.css'

function Playlist({songName,singerName,imgUrl,audioUrl}) {
    return (
        <div className="musicContainer" >
            <div className="songContainer" >
                {/* <h3>{}</h3> */}
              <img src={imgUrl} alt="songImage"/>
              <div className="songDetails" >
                <h3>{songName}</h3>
                <p>{singerName}</p>
              </div> 
            </div>
            {/* <audio controls controlslist="nodownload">
              <source src={audioUrl} type="audio/mpeg"/>
            </audio> */}
            <ReactAudioPlayer
            className="audioPlayer"
            src={audioUrl}
            controls
            controlsList="nodownload"
          />
        </div>
    )
}

export default Playlist
