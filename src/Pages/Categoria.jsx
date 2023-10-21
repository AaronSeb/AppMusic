import React, { useEffect, useState } from 'react'
import { cargar, crear, eliminar, getDatos,actualizar } from '../api/api'
import { Container, Typography } from '@mui/material';
import NuevaCategoria from '../Components/Registrar/NuevaCategoria';
import Tabla from '../Components/Registrar/Tabla';
import { titulos } from '../css/variables';

function Categoria({url}) {

  const [categorias,setCategorias]=useState([]);
  const [modoEdicion,setModoEdicion]=useState(false)
  const [categoriaEditada,setCategoriaEditada]=useState(null);

  useEffect(()=>{
    cargar(url,setCategorias)
  },[url])

  const handleCreate=(valores)=>{
    const datosDuplicados = categorias.some((categoria)=>{
      return(
        categoria.nombre ===valores.nombre ||
        categoria.descripcion === valores.descripcion ||
        categoria.color === valores.color
      );
    });

    if(datosDuplicados){
      alert("Estos datos ya existen en la lista");
    } else {
      console.log('DATOS CATEGORÍA CREADOS');
      crear(url,{
        nombre:valores.nombre,
        descripcion:valores.descripcion,
        color:valores.color
      }).then(()=>{
        getDatos(url,setCategorias);
      })
    }
  }

  const handleEditarClick = (categoria)=>{
    setModoEdicion(true);
    setCategoriaEditada(categoria);
  }

  const handleUpdate = (valores,id)=>{
    console.log('Datos actualizados');
    actualizar(`/categorias/${id}`,{
      nombre:valores.nombre,
      descripcion:valores.descripcion,
      color:valores.color
    }).then(()=>{
      getDatos(url,setCategorias);
    })
  }

  const onDelete = (id)=>{
    const confirmarEliminacion = window.confirm("Estás seguro de que deseas eliminar esta categoría?");
    if(confirmarEliminacion){
      eliminar(`/categorias/${id}`).then(()=>{getDatos(url,setCategorias)})
    }
  }

  return (
    <Container id="categoria" component='section' sx={{ marginBottom:'2rem',scrollMarginTop:'3rem' }}>
      <Typography sx={{ color:`${titulos}` }}  variant='h3' align='center' margin='3rem'>Nueva Categoria</Typography>
      <NuevaCategoria 
        handleCreate={handleCreate}
        handleUpdate={(valores,id)=>handleUpdate(valores,id)} 
        modoEdicion={modoEdicion}
        categoriaEditada={categoriaEditada}
      />
      <Tabla
        categorias={categorias}
        setCategorias={setCategorias}
        onEditarClick={handleEditarClick}
        onDelete={onDelete}
      />
    </Container>
  )
}

export default Categoria