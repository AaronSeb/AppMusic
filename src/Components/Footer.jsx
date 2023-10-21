import React from 'react'
import styled from 'styled-components'
import pie from '../assets/img/piedepagina.png'

function Footer() {
    const StyledFooter = styled.footer`
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#000000;
        border-top:2px solid #23B7F2;
    `
  return (
    <StyledFooter>
        <img style={{ margin:'20px 0' }} src={pie} alt="imagen de frecuencia" />
    </StyledFooter>
  )
}

export default Footer