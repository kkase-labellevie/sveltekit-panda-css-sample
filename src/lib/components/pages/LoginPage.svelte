<script lang="ts">
  import Input from '../input/Input.svelte';
  import Checkbox from '../checkbox/checkbox.svelte';

  import { buttonField, checkboxField, forgotPasswordContainer, formField, formStyle, mainContainer, title } from './loginPage.css';
  import Button from '../button/Button.svelte';

  let email = '';
  let password = '';
  let autoLogin = false;

  function handleLogin() {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Auto-login:', autoLogin);
  }
</script>

<main class={mainContainer}>
  <h1 class={title}>ログイン</h1>
  <form on:submit|preventDefault={handleLogin} class={formStyle}>
    <div class={formField}>
      <Input type="email" placeholder="メールアドレス" bind:value={email} />
    </div>
    <div class={formField}>
      <Input type="password" placeholder="パスワード" bind:value={password} />
    </div>
    <div class={checkboxField}>
      <Checkbox bind:checked={autoLogin} />
    </div>
    <div class={buttonField}>
      <Button label="ログイン" />
    </div>
  </form>

  <div class={forgotPasswordContainer}>
    <a href="/recipe">recipe</a>
  </div>
</main>
