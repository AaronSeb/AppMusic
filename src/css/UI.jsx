import styled from "styled-components"
import { styled as muiStyled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { colorInput } from "./variables";




export const StyledBtnHeaderNuevoVideo = styled.a`
    color: #ffff;
    border: solid 2px #ffff;
    padding: 5px 15px;
    border-radius: 5px;
    transition: color 0.3s, transform 0.3s, cursor 0.3s;

    &:hover {
        color: #23B7F2; /* Cambia el color al hacer hover */
        transform: scale(1.5, 1.1); /* Hace un zoom in al hacer hover */
        cursor: pointer; /* Cambia el cursor al hacer hover */
    }
`


export const BoxCaja = styled.div`
    width:100%;
    height:250px;
    
`



export const CssTextField = muiStyled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: `${colorInput}`,
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});

