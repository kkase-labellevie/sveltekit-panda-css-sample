<script lang="ts">
  import { css } from 'styled-system/css';
  import { getContext } from 'svelte';

  export let variant: 'default' | 'dark' = 'default';

  const baseStyles = css({
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: 'transparent',
    transition: 'all 0.2s',
    _before: {
      content: '""',
      display: 'block',
      width: '100%',
      height: '4px',
      backgroundColor: 'blue.500',
      borderRadius: '0.25rem',
      marginBottom: '0.5rem'
    }
  });

  const commonListStyles = {
    listStyle: 'none',
    padding: '0',
    '& li': {
      padding: '0.5rem',
      margin: '0.25rem 0',
      borderRadius: '0.25rem',
      borderBottom: '1px solid',
      transition: 'all 0.2s',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      _last: {
        borderBottom: 'none'
      },
      _hover: {
        transform: 'translateX(4px)'
      }
    }
  };

  const defaultListStyles = css({
    ...commonListStyles,
    '& li': {
      ...commonListStyles['& li'],
      borderColor: 'gray.200',
      _hover: {
        ...commonListStyles['& li']._hover,
        backgroundColor: 'gray.100'
      }
    }
  });

  const darkListStyles = css({
    ...commonListStyles,
    '& li': {
      ...commonListStyles['& li'],
      borderColor: 'gray.700',
      _hover: {
        ...commonListStyles['& li']._hover,
        backgroundColor: 'gray.700',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)'
      }
    }
  });

  /** このように　recipe を受け取ることも可能 */
  const recipe = getContext('recipe') as {
    title: string;
    ingredients: string[];
    instructions: string[];
  };

  export let title: string;
  export let ingredients: string[];
  export let instructions: string[];
</script>

<div class={baseStyles}>
  <h3>{title}</h3>
  <div>
    <h4>材料:</h4>
    <ul class={variant === 'dark' ? darkListStyles : defaultListStyles}>
      {#each ingredients as ingredient}
        <li>{ingredient}</li>
      {/each}
    </ul>
  </div>
  <div>
    <h4>手順:</h4>
    <ul class={variant === 'dark' ? darkListStyles : defaultListStyles}>
      {#each instructions as instruction}
        <li>{instruction}</li>
      {/each}
    </ul>
  </div>
</div>