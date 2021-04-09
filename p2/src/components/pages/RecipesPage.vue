<template>
    <div id="recipes-page">
        <h2>Recipes</h2>
        <div id="recipes">
        <router-link
                v-for="recipe in recipes"
                v-bind:key="recipe.id"
                v-bind:to="'/recipe/' + recipe.id"
                >
            <show-recipe
            id="recipe"
                v-bind:recipe="recipe"
            ></show-recipe>
        </router-link>
            
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

/* #recipe {
    width: 500px;
    border: 1px;
} */
</style>