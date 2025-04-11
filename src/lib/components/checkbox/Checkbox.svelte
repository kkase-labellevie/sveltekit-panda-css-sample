<script lang="ts">
  import { checkboxContainer, customCheckbox, checkmark, hiddenInput } from "./checkbox.css";

  export let checked: boolean = false;
  export let labelText: string = '次回から自動でログインする';
</script>

<label class={checkboxContainer}>
  <input 
    type="checkbox" 
    bind:checked={checked} 
    class={hiddenInput}
    class:checked={checked}
  />
  <div class={customCheckbox} class:checked={checked}>
    <div class={checkmark}></div>
  </div>
  <span>{labelText}</span>
</label>
