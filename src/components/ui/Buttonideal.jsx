import React from 'react'
import { Colors } from '../../constants/Colors'
import { Typo } from '../../constants/Typography'

export default function Button({ children, onPress, style, type, size, icon, disabled }) {
    // Combine styles based on props
    const getButtonStyle = () => {
        let baseStyle = {
            borderRadius: '12px',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex',
            gap: '8px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            border: 'none',
            outline: 'none',
            transition: 'opacity 0.2s',
        };

        if (type === 'primary') {
            baseStyle.backgroundColor = Colors.blue[600];
            baseStyle.color = Colors.neutral[0];
            
        } else if (type === 'secondary') {
            baseStyle.backgroundColor = 'transparent';
            baseStyle.border = `2px solid ${Colors.blue[600]}`;
            baseStyle.color = Colors.blue[600];
        } else if (type === 'text') {
            baseStyle.backgroundColor = 'transparent';
            baseStyle.color = Colors.blue[600];
            baseStyle.padding = '8px 16px';
        }

        if (size === 'large') {
            baseStyle.padding = '12px 32px';
            baseStyle.fontSize = Typo.body.p5.fontSize;
        } else if (size === 'medium') {
            baseStyle.padding = '10px 20px';
            baseStyle.fontSize = Typo.body.p5.fontSize;
        } else if (size === 'small') {
            baseStyle.padding = '8px 16px';
            baseStyle.fontSize = Typo.body.p5.fontSize;
        }

        // Merge custom style prop
        return { ...baseStyle, ...style };
    };

    return (
        <button
            type="button"
            style={getButtonStyle()}
            onClick={disabled ? undefined : onPress}
            disabled={disabled}
        >
            {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
            <span style={{
                fontFamily: Typo.body.p5.fontFamily,
                fontWeight: Typo.body.p5.fontWeight,
            }}>
                {children}
            </span>
        </button>
    );
}