<template>

  <div class='show-recipe'>
        <!-- <h3 class='name' v-bind:key='recipe.name' v-bind:recipe='recipe' >{{ recipe.name}}</h3> -->

    <div class='recipe-img'>
        <!-- <h3 class='name' v-bind:id='name'>{{recipe.name}}</h3> -->
        <h3 class='name' v-for='(name, id) in recipes' v-bind:key='id'>{{ recipe.name}}</h3>

        <img
            v-bind:src="imgSrc"
        />
    </div>
    <div class='recipe-details'>
        <p class="description" v-for='(description, id) in recipes' v-bind:key='id'>{{ recipe.description }}</p>
        <h4>Ingredients</h4>
        <ul class="ingredients" v-for='(ingredients, id) in recipes' v-bind:key='id'>{{ recipe.ingredients }}</ul>
        <h4>Directions</h4>
        <ul class="directions" v-for='(directions, id) in recipes' v-bind:key='id'>{{ recipe.directions }}</ul>
    </div>
</div>
</template>

<script>

export default {
    props: {
        recipes: {
            type: Array,
            default: null,
        },
        id: {
            type: String,
        },
    },
    data() {
        return {
        };
    },
    computed: {
        recipe() {
            return this.recipes.filter((recipe) => {
            return recipe.id == this.id;
            }, this.id)[0];
        },
        imgSrc() {
            try {
                return require('@/assets/images/foods/' + this.recipe.id + '.jpg');
            } catch (e) {
                return require('@/assets/images/food_icon.jpg');
            }
    },
    },
}; 
</script>

<style scoped>
.show-recipe {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;
    margin-top: 100px;
}

/* .name {
    height: 50px;
    font-size: 2rem;
    margin: 5px 0 10px 0;
    vertical-align: baseline;
    font-weight: bold;
} */

.recipe-img {
    margin: 0 20px 0 20px;
}

.recipe-details{
    margin: 100px 20px 0 20px;
}

.description {
    margin: auto;
    text-align: left;
    font-style: italic;
    font-size: 13pt;
    line-height: 1.5;
}

.ingredients {
    font-family: var(--serif-font);
    font-size: 13pt;
    padding: 10px;
}
</style>