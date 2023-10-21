import React from 'react'
import styled from 'styled-components'

function Banner() {

    const StyledContenedorImg = styled.div`
        background-image : url('https://i.pinimg.com/originals/2f/f9/35/2ff935e6d96a34a59c366ab2d8af4d60.jpg');
        width:100%;
        height:50vb;
        background-size:cover;
        background-repeat:no-repeat;
        background-position: center;
        display:flex;
        align-items:center;
        justify-content:space-between;
    `

  return (
    
        <StyledContenedorImg>
          <div style={{ marginLeft:'30px' }}>
              <h2 style={{ color:'white'}}>Challengue React</h2>
              <p style={{ color:'white'}}>Este challengue es una forma de aprendizaje. Es un mecanismo, en donde</p>
          </div>
          <div style={{ width:'50%' }}>
              
          </div>
          
        </StyledContenedorImg>

  )
}

export default Banner