<script lang="ts">
  import { input } from './input.css';
  export let type: string = 'text';
  export let placeholder: string = '';
  export let value: string = '';
</script>

<input {type} {placeholder} bind:value class={input} />
