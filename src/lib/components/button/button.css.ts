import { css } from 'styled-system/css';

export const button = css({
    display: 'block',
    width: '100%', 
    padding: '12px 24px',
    backgroundColor: '#C9302C',
    color: 'white',
    border: 'none',
    borderRadius: '0px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'none',
  
    boxSizing: 'border-box',
  
    '&:hover': {
      opacity: 0.9,
    },
  
    '&:active': {
      opacity: 0.8,
    },
  })