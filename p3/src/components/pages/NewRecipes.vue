<template>
    <div id="recipes-page">
        <div id="recipes">
        <router-link
                v-for="recipe in recipes"
                v-bind:key="recipe.id"
                v-bind:to="'/recipe/' + recipe.id"
                >
                <div id="recipe">
            <show-recipe
                v-bind:recipe="recipe"
            ></show-recipe>
                </div>
        </router-link>
            
    </div>
    </div>
</template>

<script>
import ShowRecipe from "@/components/ShowRecipe.vue";

export default {
    components: {
        "show-recipe": ShowRecipe,
    },
    props: {
        recipes: {
            type: Array,
            default: null
        }
    },
    data (){
        return {}
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

#recipe {
    width: 300px;
    margin: 20px;
    border: 1px;
}

a:link {
    text-decoration: none
}

a:hover {
    color: teal;
}
</style>