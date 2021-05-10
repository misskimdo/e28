<template>
    <div v-if="recipe" id="show-recipe">
        <img id="recipe-img" v-bind:src="imgSrc"/>
        <div id="recipe-details">
            <div v-if="user">
                <button v-on:click="addToFavorites()" 
                    v-if="!addedFave" 
                    data-test="favorite-button">
                    Add to Faves</button>
                <i class="fas fa-star" 
                    v-if="addedFave" 
                    v-on:click="removeFromFavorites()">
                </i>
            </div>

               
            <h1 data-test="recipe-name">{{ recipe.name}}</h1>
                <p class="description">{{ recipe.description }}</p>
            <h3>Ingredients</h3>
                <ul>{{ recipe.ingredients.split("|").join(" •  ") }} </ul>
            <h3>Directions</h3>
                <ul>{{ recipe.directions.split("|").join(" ") }}</ul>
            <h3>Categories</h3>
                <ul>{{ recipe.categories.split('|').join(', ') }}</ul>
        </div>
    </div>
</template>

<script>
import favorite from '@/components/features/favorite.js'; 

export default {
    props: {
        id: {
            type: String,
        },
    },
    setup(props) {
        const { addedFave, addToFavorites, removeFromFavorites } = favorite(
            props.id
        );
        return { addedFave, addToFavorites, removeFromFavorites };
    },
    data() {
        return {
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        recipe() {
            return this.$store.getters.getRecipeById(this.id)
        },
        imgSrc() {
            try {
                return require('@/assets/images/foods/' + this.recipe.id + '.jpg');
            } catch (e) {
                return require('@/assets/images/food_icon.jpg');
            }
        },
        recipes() {
            return this.$store.state.recipes;
        },
    },
    methods: {
    }
} 
</script>

<style scoped>
#show-recipe {
    padding-top: 200px;
    width: 90%;
    text-align: left;
}

#recipe-img {
    display: inline-block;
    vertical-align: top;
    width: 30%;
    margin: 30px;
}

button {
    font-size: 9pt;
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

i:hover {
    color: #d8e3e4;
    border: none;
}

.description {
    margin: auto;
    font-style: italic;
    font-size: 13pt;
    line-height: 1.5;
}

</style>