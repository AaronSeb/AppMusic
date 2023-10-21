import { Box, Button, ButtonGroup, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { validarTextArea, validarTexto } from './validaciones';
import { botonPrimario } from '../../css/variables';
import { CssTextField } from '../../css/UI';
import { useNavigate } from 'react-router-dom';

function NuevaCategoria(props) {


    const {handleCreate,handleUpdate,modoEdicion,categoriaEditada}=props
    const [id,setId] = useState(null);
    const [nombre,setNombre] = useState('');
    const [descripcion,setDescripcion] = useState('');
    const [color,setColor] = useState("#000000");
    const [errorName,setErrorName] = useState(
        {
            titulo:{
                error:false,
                mensaje:'Este campo es requerido'
            }
        }
    );
    const [errorDescripcion,setErrorDescripcion] = useState({
        descripcion:{
            error:false,
            mensaje:'debe añadir descripción'
        }
    }) 

    useEffect(()=>{
        if(modoEdicion && categoriaEditada){
            setId(categoriaEditada.id);
            setNombre(categoriaEditada.nombre);
            setDescripcion(categoriaEditada.descripcion);
            setColor(categoriaEditada.color);
        } else{
            setId(null),
            setNombre('');
            setDescripcion('');
            setColor('#00000');
        }

    },[modoEdicion,categoriaEditada]);

    const handleColorChange = (value)=>{
        setColor(value);
    };

    const limpiarDatos = ()=>{
        setNombre('');
        setDescripcion('');
        setColor('#000000');
    }

    //para redireccionar
    const navigate = useNavigate();

  return (
    <Box component='form' 
    onSubmit={(e)=>{e.preventDefault(); handleCreate({nombre,color,descripcion}),navigate('/')}}
    >
        <CssTextField
            InputLabelProps={{ style:{color:'#426187'} }}
            inputProps={{ style:{color:'#B2BAC2'} }}  
            id='titulo' 
            className='inputRegistro' 
            label='Título' 
            variant='outlined' 
            fullWidth margin='normal' 
            type='text' 
            onChange={(e)=>{setNombre(e.target.value)}}
            value={nombre}
            error={errorName.titulo.error}
            helperText={errorName.titulo.error? errorName.titulo.mensaje:''}
            onBlur={(e)=>{setErrorName(validarTexto(e.target.value))}}
            required
            />
        <CssTextField
            InputLabelProps={{ style:{color:'#426187'} }}
            inputProps={{ style:{color:'#B2BAC2'} }}  
            id='color' 
            className='inputRegistro' 
            label='Color'
            variant='outlined'
            fullWidth margin='normal'
            type='color'
            onChange={(e)=>handleColorChange(e.target.value)}
            value={color}
            required
            />

        <CssTextField
            InputLabelProps={{ style:{color:'#426187'} }}
            inputProps={{ style:{color:'#B2BAC2'} }}  
            className='inputRegistro' 
            label='Descripción'
            multiline rows={4} 
            fullWidth 
            margin="normal"
            onChange={(e)=>{setDescripcion(e.target.value)}}
            value={descripcion}
            error={errorDescripcion.descripcion.error}
            helperText={errorDescripcion.descripcion.error? errorDescripcion.descripcion.mensaje:''}
            onBlur={(e)=>{setErrorDescripcion(validarTextArea(e.target.value))}}
            required
            />
        <ButtonGroup sx={{ marginTop:'2rem',justifyContent:'space-between',gap:'1rem','@media(width<=480px)':{flexDirection:'column'} }} fullWidth>
            <Button sx={{ width:'180px', height:'54px', '@media(width<=480px)':{width:'100%'}, backgroundColor:`${botonPrimario}`}} 
                variant='contained'type='submit'>
                    Guardar
            </Button>
            <Button sx={{width: '200px', height: '54px', '@media(width <= 480px)': {width: '100%'}, backgroundColor:'#0d1117', borderColor:'#a7bbd2 !important',color:'#a7bbd2' }} 
                variant='outlined'type='button' 
                onClick={()=>{handleUpdate({nombre,color,descripcion},id), navigate('/')}}>
                    Actualizar
            </Button>
            <Button sx={{ width:'180px', height:'54px', background:'white !important',color:'black !important' , marginRight:'auto !important','@media(width<=480px)':{width:'100%'}}} 
                variant='outlined' 
                type='reset' 
                onClick={limpiarDatos}>
                    Limpiar
            </Button>
        </ButtonGroup>
    </Box>
  )
}

export default NuevaCategoria