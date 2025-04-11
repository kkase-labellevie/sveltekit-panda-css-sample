// src/styles/checkbox.css.ts または任意のパス

import { css } from 'styled-system/css';

export const checkboxContainer = css({
  display: 'inline-flex', 
  alignItems: 'center', 
  cursor: 'pointer',
  userSelect: 'none', 
})

export const customCheckbox = css({
  display: 'inline-block',
  width: '16px', 
  height: '16px', 
  border: '1px solid #ccc', 
  marginRight: '8px', 
  position: 'relative', 
  backgroundColor: 'white', 
  flexShrink: 0, 
  '&.checked': {
    backgroundColor: '#f8f8f8', 
    borderColor: '#C9302C', 
    '& > div': {
      display: 'block', 
    }
  }
})

export const checkmark = css({
  display: 'none', 
  position: 'absolute',
  left: '5px',
  top: '1px',
  width: '5px',
  height: '10px',
  borderStyle: 'solid',
  borderColor: '#C9302C', 
  borderWidth: '0 3px 3px 0', 
  transform: 'rotate(45deg)', 
})

export const hiddenInput = css({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,
})

export const focusStyle = css({
  '&:focus-visible + div': {
    outline: '2px solid dodgerblue', 
    outlineOffset: '1px',
  }
})
