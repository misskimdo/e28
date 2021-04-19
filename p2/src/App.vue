<template>
<div class="nav-header">
<div>
  <img id="logo" src="@/assets/images/kimskitchen-logo.png">
  </div>
<div id="nav">
  <nav>
    <ul>
        <li>
            <router-link
                v-for="link in links"
                v-bind:key="link"
                v-bind:to="paths[link]"
                >{{ link }}</router-link
            >
        </li>
    </ul>
</nav>

<router-view v-bind:recipes='recipes' v-on:update-recipes='loadRecipes'></router-view>
  </div>
  </div>
</template>

<script>
import {axios} from '@/common/app.js';

export default {
  name: "App",
  data() {
    return {
        recipes: [],

        links: ['home', 'recipes', 'add a recipe'],

        paths: {
            home: '/',
            recipes: '/recipes',
            'add a recipe': '/recipe/new',
        },
        };
  },
  mounted() {
    this.loadRecipes();
  },
  methods: {
    loadRecipes() {
      axios.get('recipe').then((response) => {
      this.recipes = response.data.recipe;
    });
    }
  }
};
</script>

<style src='@/assets/css/kimskitchen.css'></style>

<style>
</style>
