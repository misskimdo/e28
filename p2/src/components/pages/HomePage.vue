<template>
  <div id="home-page">
  <h3 id= "latest-title">Latest Recipes</h3>
  <div id='latest-recipes'>
      
  <router-link
                v-for="recipe in recipes.slice().reverse()"
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
  <div id='categories-page'>
        <h3>Categories</h3>
        <ul class='clean-list'>
            <li v-for="(category, id) in categories" v-bind:key="id">{{ category }}</li>
        </ul>
    </div>
    </div>
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
    return {};
  },
components: {
    "show-recipe": ShowRecipe,
  },
computed: {
    categories() {
    let categories = this.recipes.map((recipe) =>
                recipe.categories.split("|")
            );
            let mergedCategories = [].concat.apply([], categories);
            return [...new Set(mergedCategories)].sort();
},
  //   latestRecipes () {
  //   return this.recipes[this.recipes.length - 1].id;
  // }
},
// filters: {
//     reverse() {
//       return this.recipes.slice().reverse()
//     }
// }
}

</script>

<style>
#home-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;

}

#latest-title {
  margin-top: 100px;
  
}

#latest-recipes {
  display: flex;
    flex-wrap: wrap;
  width: 80%;
  margin: 100px 0 0 0;
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

/* #individual-recipe {
  display: flex;
    flex-wrap: wrap;
} */

</style>