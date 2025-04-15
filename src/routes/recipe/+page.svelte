<script lang="ts">
  import RecipeCard from '$lib/components/card/RecipeCard.svelte';
  import RecipeItem from '$lib/components/card/RecipeItem.svelte';
  import { setContext } from 'svelte';

  const sampleRecipe = {
    title: '簡単パスタ',
    ingredients: [
      'パスタ 200g',
      'トマト 2個',
      'にんにく 2片',
      'オリーブオイル 大さじ2',
      '塩 少々'
    ],
    instructions: [
      'パスタを茹でる',
      'にんにくをみじん切りにする',
      'トマトを一口大に切る',
      'フライパンでにんにくを炒める',
      'トマトを加えて炒める',
      'パスタと和える'
    ]
  };

  /** このように　recipe を受け渡すことも可能, このコンテキストは小要素にしか受け渡せない (RecipeCard, RecipeItem) */
  setContext('recipe', sampleRecipe);
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">レシピサンプル</h1>

  <div class="space-y-4">
    <RecipeCard variant="default" recipe={sampleRecipe} />
    <RecipeCard variant="dark" recipe={sampleRecipe} />
  </div>
</div>