<script lang="ts">
  import RecipeCard from '$lib/components/card/RecipeCard.svelte';
  import RecipeItem from '$lib/components/card/RecipeItem.svelte';

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
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">レシピサンプル</h1>

  <div class="space-y-4">
    <RecipeCard variant="default">
      <RecipeItem {...sampleRecipe} variant="default" />
    </RecipeCard>

    <RecipeCard variant="dark">
      <RecipeItem {...sampleRecipe} variant="dark" />
    </RecipeCard>
  </div>
</div>