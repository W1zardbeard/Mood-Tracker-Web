import { useState } from 'react'
import styled from 'styled-components'
import { Typo } from './constants/Typography.js'
import { Colors } from './constants/Colors.js'

import Button from './components/ui/Button.jsx'

function App() {

  const StyledHeading = styled.h1`
    color: ${Colors.blue[700]};
  `;


  return (
    <>
      <div>
        <StyledHeading style={Typo.heading.h1}>butthole</StyledHeading>
        <Button type="primary">Primary Button</Button>
      </div>
    </>
  )
}

export default App
