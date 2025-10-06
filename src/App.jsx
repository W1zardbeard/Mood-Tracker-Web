import { useState, useEffect } from 'react'


import Button from './components/ui/button/Button.jsx'
import InputField from './components/ui/InputField.jsx'
import Test from './components/test/Test.jsx'

// const StyledHeading = styled.h1`
//     color: ${Colors.blue[700]};
//   `;


function App() {

  // const [inputValue, setInputValue] = useState(''); 

  
  // function handleClick(){
  //   alert('butthole');
  // }

  // function handleInputChange(event) {
  //   console.log("im changeing")
  //   setInputValue(event.target.value);
   
  // }

  // useEffect(() => {
  //   console.log('Input value changed:', inputValue);
  // }, [inputValue]);


  return (
    <>
      <div>
        <h1>butthole</h1>
        {/* <Button onPress={handleClick} type="secondary">Primary Button</Button>
        <InputField
          type="text"
          placeholder="Enter your text"
          value={inputValue}
          onChange={handleInputChange}
        /> */}
        <Test />
      </div>
    </>
  )
}

export default App
