<script lang="ts">
  import { css } from 'styled-system/css';

  export let label: string = 'ログイン';

  const buttonStyle = css({
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
</script>

<button class={buttonStyle}>{label}</button>

<!-- このようにも書ける -->
<!-- <button class={css({
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
}>{label}</button> -->
