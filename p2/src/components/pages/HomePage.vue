<template>
  <div id="home-page">
  <h1>Need An Idea?</h1>
    <div>
      <button v-on:click="choose" id="choose-button">Give me a random recipe</button>
      </div>
      <div>
      <router-link
          v-bind:to="'/recipe/' + randomRecipe.id"
          >
          <div id='random-recipe'>
              <show-recipe
                  v-bind:recipe="randomRecipe"
              ></show-recipe>
          </div>
      </router-link>
      </div>
                    
    <div>
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
  </div>
</template>

<script>
import ShowRecipe from '@/components/ShowRecipe.vue';

export default {
    components: {
        "show-recipe": ShowRecipe,
    },
    props: {
            recipes: {
                type: Array,
                default: null
            },
    },
    data() {
        return {
          randomRecipe: 0
        };
    },
    methods: {
        choose() {
          const randomRecipe = Math.floor(Math.random() * this.recipes.length);
          this.randomRecipe = this.recipes[randomRecipe];
        }
    }
}

</script>

<style scoped>
#home-page {
    padding-top: 200px;
    width: 100%;
}

@media only screen and (max-width: 600px) {
    #home-page {
    padding-top: 0;
}
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

</style>