import { Box, Button, ButtonGroup, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react'
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { validarSelect, validarTextArea, validarTexto, validarUrl } from './validaciones';
import { CssTextField } from '../../css/UI';
import { botonPrimario, colorInput } from '../../css/variables';
import { useNavigate } from 'react-router-dom';
function NewVideo(props) {

    const {handleCreate,categorias} = props;
    const [titulo,setTitulo]= useState('');
    const [video,setVideo]= useState('');
    const [imagen,setImagen]= useState('');
    const [categoria,setCategoria]= useState('');
    const [descripcion,setDescripcion]= useState('');

    //manejando los errores
    const [errortitle,setErrortitle]= useState({
    
        titulo:{
            error:false,
            mensaje:'Este campo es requerido'
        }
    });

    const [errorVideo,setErrorvideo]=useState({
        link:{
            error:false,
            mensaje:'La url es requerida'
        }
    });

    const [errorimagen,setErrorimagen]=useState({
        link:{

            video:false,
            mensaje:'La url de la imagen es requerida'
        }
    });

    const [errorCategoria,setErrorcategoria]=useState({
        categoria:{
            error:false,
            mensaje:'debes seleccionar la categoría'
        }
    });
    const [errorDescripcion,setErrordescripcion]=useState({
        descripcion:{
            error:false,
            mensaje:'debes agregar una descripción'
        }
    });

    //manejar los eventos
    const handleChange = (e)=>{
        setCategoria(e.target.value);
    }

    const manejarCambio=(e)=>{
        const maxLength = 300;
        const minLength = 1;
        const inputValue = e.target.value;
        if(inputValue.length<=maxLength && inputValue.length>=minLength){
            setDescripcion(inputValue);
        }
    }

    const limpiarDatos = ()=>{
        setTitulo('');
        setVideo('');
        setImagen('');
        setCategoria('');
        setDescripcion('');
    }


    //para el select
    const handleBlur = ()=>{
        const validationErrors = validarSelect(categoria);
        setErrorcategoria(validationErrors);
    }
    /* 
    luego lo pruebo
    const creacion = (e)=>{
        e.preventDefault();
        handleCreate({titulo,imagen,categoria,descripcion})
    } */
    
    /*utilizo el navigate para redirigir a inicio, está en el onsubmit */
    const navigate = useNavigate();


  return (
    <Box component='form' onSubmit={(e)=>{e.preventDefault(); handleCreate({titulo,video,imagen,categoria,descripcion}),navigate('/')}}>
        <CssTextField
            InputLabelProps={{ style:{color:'#426187'} }}
            inputProps={{ style:{color:'#B2BAC2'} }} 
            id='titulo'
            className='inputRegistro'
            label='Título'
            variant='outlined'
            fullWidth margin='normal'
            type='text'
            value={titulo}
            onChange={(e)=>{setTitulo(e.target.value);}}
            error={errortitle.titulo.error}
            helperText={errortitle.titulo.error? errortitle.titulo.mensaje:''}
            onBlur={(e)=>{setErrortitle(validarTexto(e.target.value))}}
            required
        />
        <CssTextField
            InputLabelProps={{ style:{color:'#426187'} }}
            inputProps={{ style:{color:'#B2BAC2'} }}
            id='urlVideo'
            className='inputRegistro'
            label='Video'
            variant='outlined'
            fullWidth margin='normal'
            type='url'
            value={video}
            onChange={(e)=>{setVideo(e.target.value)}}
            error={errorVideo.link.error}
            helperText={errorVideo.link.error? errorVideo.link.mensaje:''}
            onBlur={(e)=>{setErrorvideo(validarUrl(e.target.value))}}
            required
        />
        <CssTextField
            InputLabelProps={{ style:{color:'#426187'} }}
            inputProps={{ style:{color:'#B2BAC2'} }}
            id='miniatura'
            className='inputRegistro'
            label='Link de la miniatura'
            variant='outlined'
            fullWidth margin='normal'
            type='url'
            onChange={(e)=>{setImagen(e.target.value)}}
            error={errorimagen.link.error}
            helperText={errorimagen.link.error? errorimagen.link.mensaje:''}
            onBlur={(e)=>{setErrorimagen(validarUrl(e.target.value))}}
            required
        />
        <FormControl sx={{ minWidth:130 }} margin='normal' className='inputRegistro'>
            <InputLabel sx={{color:`${colorInput}` }}>Categoria</InputLabel>
            <Select
                sx={{
                    color: `${colorInput}`,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: `${colorInput}`
                    },
                    '& .MuiSvgIcon-root': {
                        color: `${colorInput}`
                    }
                }}
                autoWidth 
                value={categoria}
                onChange={handleChange}
                label="Categoría"
                onBlur={handleBlur}
                error={errorCategoria.categoria.error}
                required
            >
                <MenuItem disabled selected value="">
                    <em>None</em>
                </MenuItem>
                {
                    categorias.map((categoria,index)=>{
                        return(
                            <MenuItem key={index} value={categoria}>{categoria}</MenuItem>
                        )
                    })
                }

            </Select>
            {errorCategoria.categoria.error && (
                <FormHelperText error>{errorCategoria.categoria.mensaje}</FormHelperText>
            )
            }
        </FormControl>
        <CssTextField
            InputLabelProps={{ style:{color:'#426187'} }}
            inputProps={{ style:{color:'#B2BAC2'} }} 
            label='Descripción'
            className='inputRegistro'
            multiline
            rows={4}
            fullWidth
            margin='normal'
            onChange={manejarCambio}
            value={descripcion}
            error={errorDescripcion.descripcion.error}
            helperText={errorDescripcion.descripcion.error?errorDescripcion.descripcion.mensaje:''}
            onBlur={(e)=>{setErrordescripcion(validarTextArea(e.target.value))}}
            required
        />
        <ButtonGroup sx={{ marginTop:'2rem',justifyContent: 'space-between', gap:'1rem','@media(width<=480px)':{flexDirection:'column'}}} fullWidth>
            <Button sx={{ width:'180px', height:'54px', '@media(width<=480px)':{width:'100%'}, backgroundColor:`${botonPrimario}`}} variant='contained' type='submit'>Guardar</Button>
            <Button sx={{ width:'180px', height:'54px', background:'white !important',color:'black !important' , marginRight:'auto !important','@media(width<=480px)':{width:'100%'}}} variant='outlined' type='reset' onClick={limpiarDatos}>Limpiar</Button>
            <HashLink to='/nueva-categoria#categoria'>
                <Button sx={{width: '254px', height: '54px', '@media(width <= 480px)': {width: '100%'}, backgroundColor:'#0d1117', borderColor:'#a7bbd2',color:'#a7bbd2' }} variant="outlined">Nueva Categoría</Button>
            </HashLink>
        </ButtonGroup>
    </Box>
  )
}

export default NewVideo