import { useState } from 'react'
import styled from 'styled-components'
import { Typo } from './constants/Typography.js'
import { Colors } from './constants/Colors.js'

function App() {

  const StyledHeading = styled.h1`
    color: ${Colors.blue[700]};
  `;


  return (
    <>
      <div>
        <StyledHeading style={Typo.heading.h1}>butthole</StyledHeading>
      </div>
    </>
  )
}

export default App
