import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../constants/Colors'
import { Typo } from '../../constants/Typography' 

export default function Button({children, type, disabled, }) {

    const Button = styled.button`
        border-radius: 12px;
        text-align: center;
        justify-content: center;
        align-items: center;
        gap: 8px;
        display: inline-flex;
        cursor: pointer;
        border: none;
        outline: none;
        background-color: ${type === 'primary' ? Colors.blue[600] : 'transparent'};
        padding: 12px 32px;
        
        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
            &:hover {
             background-color: ${Colors.blue[700]};
            }
    `;

    const Text = styled.span`
        color: ${type === 'primary' ? Colors.neutral[0] : Colors.blue[600]};
    `;


  return (
    <Button>
        <Text style={Typo.body.p5}>
        {children}
        </Text>
    </Button>
  )
}
