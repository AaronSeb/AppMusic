import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cargar } from '../api/api';
import { Box, Typography } from '@mui/material';
import { MdPlayArrow } from 'react-icons/md';
import ReactPlayer from 'react-player';
import { box2, box2hover, titulos } from '../css/variables';

function VerVideo() {

  const [video,setVideo]=useState({})

  const {id} = useParams();

  useEffect(()=>{
    cargar(`/videos/${id}`,setVideo)
  },[id])

  return (
    <Box component='section' sx={{ display:'flex', flexDirection:'column', gap:'1.5rem', padding:'3rem','@media(width<=790px)':{gap:'0.3rem'}}}>
      <Typography id={video.titulo} variant="h2" gutterBottom align="center" sx={{display: 'flex', color:`#426187`, justifyContent:'center', alignItems: 'center', scrollMarginTop: `5rem`, '@media(width <= 790px)': {fontSize: '1.75rem'}, '@media(width <= 480px)': {fontSize: '1.3rem'}}}> {video.titulo}</Typography>
      <div className='player-wrapper'>
        <ReactPlayer className='reactPlayer videoRP' url={video.url} light={video.miniatura} playing controls width='100%' height='100%'/>
      </div>
      <Box component='section' sx={{
          margin:'auto',
          border:'3px solid #30445c',
          borderRadius:'10px',
          padding:'30px',
          width:'100%',
          '@media(width>=790px)':{width:'50%'},
          height:'auto',
          wordWrap:'break-word',
          backgroundColor:`${box2}`,
          '&:hover':{
            backgroundColor:`${box2hover}`,
            opacity:[0.9,0.8,0.7]
          }
       }}>
        <Typography sx={{ color:`${titulos}` }} variant='h4' align='center' className='categoria'>Área: {video.categoria}</Typography>
        <Typography sx={{ color:`${titulos}` }} variant='h6' align='center' className='categoria'>{video.descripcion}</Typography>
        
      </Box>
        
    </Box>
  )
}

export default VerVideo