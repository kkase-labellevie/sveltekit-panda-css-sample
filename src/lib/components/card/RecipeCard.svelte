<script lang="ts">
  import { cva } from 'styled-system/css';
  import RecipeItem from './RecipeItem.svelte';

  const cardVariants = cva({
    base: {
      padding: '1rem',
      borderRadius: 'lg',
      boxShadow: 'md',
      transition: 'all 0.2s'
    },
    variants: {
      variant: {
        default: {
          backgroundColor: 'white',
          _hover: { boxShadow: 'lg' }
        },
        dark: {
          backgroundColor: 'gray.800',
          color: 'white',
        }
      },
      size: {
        default: {
          width: 'full',
          maxWidth: 'md'
        },
        large: {
          width: 'full',
          maxWidth: 'xl'
        }
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  });

  export let variant: 'default' | 'dark' = 'default';
  export let size: 'default' | 'large' = 'default';
  export let recipe: {
    title: string;
    ingredients: string[];
    instructions: string[];
  };
</script>

<div class={cardVariants({ variant, size })}>
  <RecipeItem { ...recipe } />
</div>