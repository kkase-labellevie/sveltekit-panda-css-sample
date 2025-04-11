// src/styles/loginForm.css.ts
import { css } from 'styled-system/css';

export const mainContainer = css({
  maxWidth: '400px', 
  margin: '60px auto', 
  padding: '20px', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
})

export const title = css({
  marginBottom: '32px', 
  fontSize: '24px', 
  fontWeight: 'bold', 
  color: '#333', 
  textAlign: 'center',
})

export const formStyle = css({
  width: '100%', 
  display: 'flex',
  flexDirection: 'column',
  gap: '24px', 
})

export const formField = {
  width: '100%', 
}

export const checkboxField = css({
  ...formField,
})

export const buttonField = css({
  ...formField,
})

export const fullWidthButton = css({
  width: '100%',
  display: 'block',
})

export const forgotPasswordContainer = css({
  marginTop: '24px', 
})

export const forgotPasswordLink = css({
  color: '#C9302C', 
  textDecoration: 'none',
  fontSize: '14px', 

  '&:hover': {
    textDecoration: 'underline',
  },
})