import React, {useState, useEffect } from 'react'
import './MusicCard.css';
import axios from './axios';
import Playlist from './Playlist';

function MusicCard() {

  const [music, setMusic] = useState([]);

  useEffect(() => {
    async function fatchData(){
      const req = await axios.get("/music/songDetails");
      setMusic(req.data); 
    }
    fatchData();
  }, [])

  return (
    <div className="mainContainer">
      <h1>My PlayList</h1>
      {
        music.map((song)=>( 
          <Playlist key={song.id} imgUrl={song.imgUrl} songName={song.songName} singerName={song.singerName} audioUrl={song.audioUrl}/>
        ))
         
      }
      <br />
    </div>
  )
}

export default MusicCard
