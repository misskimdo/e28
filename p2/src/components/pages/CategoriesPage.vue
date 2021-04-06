<template>
  <div id='categories-page'>
        <h2>Categories</h2>
        <ul class='clean-list'>
            <li v-for='(category, id) in categories' v-bind:key='id'>{{ category }}</li>
        </ul>
    </div>
</template>

<script>
import { recipes } from '@/common/recipes.js';

export default {
  data() {
    return {
    recipes: recipes,
    };
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