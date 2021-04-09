<template>
<div>
  <img id="logo" src="@/assets/images/kimskitchen-logo.png">

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

<router-view></router-view>
  </div>
</template>

<script>
import { recipes } from '@/common/recipes.js';

export default {
  name: "App",
  data() {
    return {
        recipes: recipes,
        links: ['home', 'recipes', 'categories'],

    /* Map links to the appropriate component */
        paths: {
            home: '/',
            recipes: '/recipes',
            // recipe: '/recipe/:id',
            categories: '/categories',
        },
        };
  },
};
</script>

<style src='@/assets/css/kimskitchen.css'></style>

<style>
</style>
