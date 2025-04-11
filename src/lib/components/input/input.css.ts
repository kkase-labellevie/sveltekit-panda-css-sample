import { css } from 'styled-system/css';

export const input = css({
    border: 'none', 
    borderBottom: '1px solid #cccccc', 
    padding: '8px 0', 
    fontSize: '16px', 
    backgroundColor: 'transparent', 
    outline: 'none', 
    width: '100%', 
  
    '&:placeholder': {
      color: '#cccccc', 
      opacity: 1, 
    },
  
    '&:focus': {
      borderBottomColor: '#a0a0a0', 
    },
  })