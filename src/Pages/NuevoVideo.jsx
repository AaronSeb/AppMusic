import React, { useEffect, useState } from 'react'
import NewVideo from '../Components/Registrar/NewVideo'
import { cargar, crear, getDatos } from '../api/api';
import { Container, Typography } from '@mui/material';
import { titulos } from '../css/variables';


function NuevoVideo({url}) {
  const [videos,setVideos]=useState([]);
  const [categorias,setCategorias]=useState([]);

  useEffect(()=>{
    cargar('/categorias',setCategorias)
  },['/categorias'])


  const handleCreate = (valores)=>{

    const datosDuplicados= videos.some((video)=>{
      return (
        (
          video.titulo === valores.titulo &&
          video.url === valores.url &&
          video.miniatura === valores.miniatura &&
          video.descripcion === valores.descripcion) || 
          video.categoria === valores.categoria
        )
    })

    if(datosDuplicados){
      alert("Estos datos ya existen en la lista");
    } else {
      crear(url,{
        titulo: valores.titulo,
        url:valores.video,
        miniatura: valores.imagen,
        categoria: valores.categoria,
        descripcion: valores.descripcion
      }).then(()=>{
        getDatos(url,setVideos)
      })

      

    }

  }

  return (
    <Container component='section' sx={{ marginBottom:'2rem' }}>
        <Typography sx={{ color:`${titulos}` }} variant='h3' align='center' margin='3rem'>Nuevo Vídeo</Typography>
        <NewVideo 
        videos={videos} 
        setVideos={setVideos}
        handleCreate={handleCreate} //esta es la props
        categorias = {categorias.map((categoria)=>categoria.nombre)}//esta es la otra prop
        />
    </Container>
  )
}

export default NuevoVideo