<template>
    <div id="favorites-page">
        <h1>Your Favorite Recipes</h1>

        <div v-if="items.length == 0">You haven't added any favorite recipes yet.</div>
        <ul class="clean-list" v-if="recipesLoaded">
            <li v-for="item in items" v-bind:key="item.id">
                {{ getRecipeDetails(item.id).name }}
                <button v-on:click="removeFromFavorites(item.id)"><i class="fas fa-minus-circle"></i></button>
            </li>
        </ul>

    </div>
</template>

<script>
import { favorites } from "@/common/app.js";

export default {
    data() {
        return {
            items: [],
        };
    },
    computed: {
        recipesLoaded() {
            return this.recipes.length > 0;
        },
        recipes() {
            return this.$store.state.recipes;
        },
    },
    mounted() {
        this.items = favorites.getItems();
    },
    methods: {
        getRecipeDetails(id) {
            return this.recipes.filter((recipe) => {
                return recipe.id == id;
            }, id)[0];
        },
        removeFromFavorites(id) {
            favorites.remove(id);
        },
    },
};
</script>

<style scoped>
#favorites-page {
    padding-top: 200px;
    width: 100%;
}

ul {
    list-style-type:none
}

button {
    font-size: 9pt;
    background-color: white;
}

i {
    color: #004394;
}

/* #bg-div {
   overflow: hidden;
} */

#recipe-details{
    display: inline-block;
    margin: 30px;
    width: 60%;
    @media (max-width: 620px) {
      width: 90%;
      margin: 0;}
}

p, h2, h3 {
    text-align: left;
}

.description {
    margin: auto;
    font-style: italic;
    font-size: 13pt;
    line-height: 1.5;
}
</style>