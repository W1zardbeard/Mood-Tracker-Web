import React from 'react'

export default function InputField({type, placeholder, value, onChange}) {
  return (
    <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
  )
}
