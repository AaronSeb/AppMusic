import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import {cargar} from '../api/api'
import { Carrusel } from '../Components/HomeCarrousel/Carrusel'

function Home() {
  const [sectionCategoria,setSectionCategoria] = useState([]);
  const [contentVideo,setContentVideo] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        await cargar('/categorias',setSectionCategoria);
        await cargar('/videos',setContentVideo);
      } catch (error) {
        console.error("error al cargar datos")
      }
    }
    fetchData();
  },[])



  return (

      <main>
        <Banner/>
        <>
          {
            sectionCategoria.map((categoria)=>{
              return <Carrusel key={categoria.id} nombre={categoria.nombre} color={categoria.color} videos={contentVideo.filter(contentVideo=>contentVideo.categoria===categoria.nombre)}/>
            })
          }
        </>

      </main>
    
  )
}

export default Home