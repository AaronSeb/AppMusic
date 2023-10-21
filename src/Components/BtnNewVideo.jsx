import React from 'react'
import { Link } from 'react-router-dom'
import {StyledBtnHeaderNuevoVideo} from '../css/UI'
function BtnNewVideo() {
  return (
    <Link to={'/nuevo-video'}>
        <StyledBtnHeaderNuevoVideo>Nuevo Vídeo</StyledBtnHeaderNuevoVideo>
    </Link>
  )
}

export default BtnNewVideo