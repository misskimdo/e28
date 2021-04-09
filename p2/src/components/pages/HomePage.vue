<template>
  <div id="home-page">
      <p>A collection of foods and bakes by Kim.</p>
  <show-favorites></show-favorites>
  </div>
  <div id='categories-page'>
        <h2>Categories</h2>
        <ul class='clean-list'>
            <li v-for='(category, id) in categories' v-bind:key='id'>{{ category }}</li>
        </ul>
    </div>
</template>

<script>
import ShowFavorites from '@/components/ShowFavorites.vue';
import { recipes } from '@/common/recipes.js';

export default {
data() {
    return {
    recipes: recipes,
    };
  },
components: {
    "show-favorites": ShowFavorites,
  },
  computed: {
    categories() {
    let categories = this.recipes.map(recipe => recipe.categories);
    let mergedCategories = [].concat.apply([], categories);

    // Return unique, sorted categories
    return [...new Set(mergedCategories)].sort();
}
}
}
</script>

<style>

</style>