import React, {useRef} from 'react'
import './PlayVideo.css'
import video from '../Video/A Short Cornell University Campus Tour _ 4K (1).mp4'
const PlayVideo = ({setPlay, play}) => {
  const player = useRef(null)
  const stop = useRef(null)
  const closePlayer = (e)=>{
    if(e.target === player.current){
      setPlay(false)
      stop.current.pause()
      

    }

  }
  return (
    <div ref={player} onClick={closePlayer} className={`vid ${play? '' : 'hide'}`}>
      <video
       ref={stop} src={video} autoPlay muted controls ></video>
    </div>
  )
}

export default PlayVideo
