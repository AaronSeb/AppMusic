import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import {MdDelete} from "react-icons/md"
import{FaEdit} from "react-icons/fa"

function Tabla({categorias,setCategorias,onEditarClick,onDelete}) {
  return (
    <TableContainer sx={{ marginTop:'2rem' }}>
        <Table sx={{ minWidth:'100%' }}>
            <TableHead sx={{ backgroundColor:'#a6bbd3' }}>
                <TableRow>
                    <TableCell sx={{ color:'inherit','@media(width<=399px)':{padding:'3px'}}}><Typography color={'#364e6e'} variant="body1" fontWeight="bold">Categoria</Typography></TableCell>
                    <TableCell sx={{ color:'inherit','@media(width<=399px)':{padding:'3px'}}}><Typography color={'#364e6e'} variant="body1" fontWeight="bold">Descripción</Typography></TableCell>
                    <TableCell sx={{ color:'inherit','@media(width<=399px)':{padding:'3px'}}}><Typography color={'#364e6e'} variant="body1" fontWeight="bold">Editar</Typography></TableCell>
                    <TableCell sx={{ color:'inherit','@media(width<=399px)':{padding:'3px'}}}><Typography color={'#364e6e'} variant="body1" fontWeight="bold">Eliminar</Typography></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categorias.map((categoria)=>{
                        const {id,nombre,descripcion,color}=categoria;
                        return(
                            <TableRow key={id}>
                                <TableCell sx={{ color:'#E9E9EB','@media(width<=399px)':{padding:'3px'}}}>{nombre}</TableCell>
                                <TableCell sx={{ color:'#E9E9EB','@media(width<=399px)':{padding:'3px'}}}>{descripcion}</TableCell>
                                <TableCell sx={{'@media(width<=399px)':{padding:'3px'}}}>
                                    <Button  onClick={()=>{onEditarClick(categoria)}}>
                                        <FaEdit id="icon-edit" style={{ fontSize:'24px' }}/>
                                    </Button>
                                </TableCell>
                                <TableCell sx={{'@media(width<=399px)':{padding:'3px'}}}>
                                    <Button onClick={()=>{onDelete(categoria.id)}}>
                                        <MdDelete style={{ color: 'red', fontSize:'24px' }} id="icon-delete"/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default Tabla