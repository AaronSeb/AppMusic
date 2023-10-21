import React from 'react'
import ReactPlayer from 'react-player'

function VideoCard(props) {
  return (
    <div style={{ margin:'10px 10px', width:'90%', height:'90%' }}>
        <ReactPlayer className='reactPlayer' url={props.url} light={props.miniatura} playing controls width="100%" height="100%"/>
    </div>
    
  )
}

export default VideoCard