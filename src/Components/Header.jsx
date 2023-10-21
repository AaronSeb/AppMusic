import React from 'react'
import styled from 'styled-components'
import logo from '../assets/img/lmusic.png'
import BtnNewVideo from './BtnNewVideo'
import { Link } from 'react-router-dom'

const StyleHeader = styled.nav`
    width:100%;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    height: 10vh;
    align-items: center;
    border-bottom:2px solid #23B7F2;
`

const StyledLogo = styled.img`
    height:50px;
    width:60px;
    /* @media (max-width: 800px) {
    height: 30%;
    width:5%;
  } */
`

function Header() {
  return (
    <StyleHeader>
      <Link to="/">
        <StyledLogo src={logo} alt="logo imagen" />
      </Link>
        <BtnNewVideo/>
    </StyleHeader>
  )
}

export default Header