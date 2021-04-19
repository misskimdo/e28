<template>
  <div id="home-page">
  <h1>Need An Idea?</h1>

<div>
  <button v-on:click="choose" id="choose-button">Give me a random recipe</button>
  </div>
  <!-- <router-link
                v-bind:recipe="recipe.id"
                v-bind:to="'/recipe/' + recipe.id"
                > -->
                <div id='random-recipe'>
  <show-recipe
                v-bind:recipe="randomRecipe"
            ></show-recipe>
            </div>
            <!-- </router-link> -->
            
                <!-- </div> -->

<h1>Latest Recipes</h1>
  <div id='latest-recipes'>
      
  <router-link
                v-for="recipe in recipes.slice(7).reverse()"
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
  <!-- <div id='categories-page'>
        <h3>Categories</h3>
        <ul class='clean-list'>
            <li v-for="(category, id) in categories" v-bind:key="id">{{ category }}</li>
        </ul>
    </div> -->
    
</template>

<script>
import ShowRecipe from '@/components/ShowRecipe.vue';

export default {
    props: {
            recipes: {
                type: Array,
                default: null
            },
    },
    data() {
        return {
          randomRecipe: []
        };
    },
    components: {
        "show-recipe": ShowRecipe,
    },
    
    methods: {
        choose() {
          const randomRecipe = Math.floor(Math.random() * this.recipes.length);
          this.randomRecipe = this.recipes[randomRecipe];
        }
    }
}

</script>

<style>
#home-page {
  padding-top: 200px;
  width: 100%;
}

#random-recipe,
#latest-recipes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;

}

#categories-page {
  width: 10%;
  margin: 100px 0 0 0;
  text-align: left;
}

#recipe {
  width: 300px;
  margin: 0 10px;
}

a:link {
  text-decoration: none
}

a:hover {
    color:#6f727c ;
}

/* #individual-recipe {
  display: flex;
    flex-wrap: wrap;
} */

</style>