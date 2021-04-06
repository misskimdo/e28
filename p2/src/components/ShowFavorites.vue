<template>
<div id='show-favorites'>
  <h2>Favorite Recipes</h2>
  <ul class="clean-list">
            <li v-for="recipe in favoriteRecipes" v-bind:key="recipe.id">
                {{ recipe.name }}
            </li>
        </ul>
  </div>
</template>

<script>
import { recipes } from '@/common/recipes.js';

export default {
props: {
    category: {
       type: String
   }
},
data () {
    return {
       recipes: recipes
   };
},
computed: {
    // favoriteRecipes() {
    //     return this.recipes.filter((recipe) => {
    //     return recipe.favorites.includes(this.favorite);
    // }, this.favorite);
    // },
},
};
</script>

<style scoped>
#show-favorites {
    background-color: var(--light-blue);
    border-radius: var(--radius);
    padding: 10px;
}
</style>