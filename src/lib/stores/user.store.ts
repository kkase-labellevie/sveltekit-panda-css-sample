import { writable } from 'svelte/store';

export const userStore = writable({
  name: 'Foo Bar',
  age: 20,
});
