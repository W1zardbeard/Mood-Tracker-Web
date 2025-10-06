import React from 'react'

import { Colors } from '../../../constants/Colors'
import { Typo } from '../../../constants/Typography' 


//  const StyledButton = styled.button`
//         border-radius: 12px;
//         text-align: center;
//         justify-content: center;
//         align-items: center;
//         gap: 8px;
//         display: inline-flex;
//         cursor: pointer;
        
//         outline: none;
//         ${props.type === 'primary' && `
//         background-color: ${Colors.blue[600]};
//         border: none;
//         padding: 12px 32px;
//         ${!props.disabled && ` 
//         &:hover {
//             background-color: ${Colors.blue[700]};
//         }
//         `} 
//         `}
//         ${props.type === 'secondary' && `
//         background-color: ${Colors.neutral[0]};
//         border: 1px solid ${Colors.neutral[300]};
//         padding: 8px 16px;
//         ${!props.disabled && ` 
//         &:hover {
//            border: 1px solid ${Colors.neutral[900]};
//         }
//         `} 
//         `}
        
        
//         &:disabled {
//             cursor: not-allowed;
//             opacity: 0.5;
//         }
         
//     `;

//     const Text = styled.span`
//         ${props.type === 'primary' && `
//         color: ${Colors.neutral[0]};
//         `}
//          ${props.type === 'secondary' && `
//         color: ${Colors.neutral[900]};
//         `}
//     `;


export default function Button({children, type, disabled, onPress }) {

   

  return (
    <StyledButton 
    onClick={onPress}
    disabled={disabled}
    >
        <Text style={type === "primary" ? Typo.body.p5 : Typo.body.p6}>
        {children}
        </Text>
    </StyledButton>
  )
}
