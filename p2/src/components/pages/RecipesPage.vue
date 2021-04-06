<template>
    <div id="recipes-page">
        <h2>Recipes</h2>
        <div id="recipes">
            <show-recipe
                v-for="recipe in recipes"
                v-bind:key="recipe.id"
                v-bind:recipe="recipe"
            ></show-recipe>
        </div>
    </div>
</template>

<script>
import ShowRecipe from '@/components/ShowRecipe.vue';
import { recipes } from '@/common/recipes.js';

export default {
    components: {
        "show-recipe": ShowRecipe,
    },
data (){
    return {
recipes: recipes
    }
}
}
</script>

<style scoped>
#recipes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}
</style>