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

<router-view v-on:update-recipes='loadRecipes'></router-view>
  </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
        links: ['home', 'all recipes', 'add a recipe', 'favorites'],

        paths: {
            home: '/',
            'all recipes': '/recipes',
            'add a recipe': '/recipe/new',
            favorites: '/favorites',
        },
        };
  },
  computed: {
    recipes(){
      return this.$store.state.recipes;
    },
  },
  mounted() {
    this.loadRecipes();
  },
  methods: {
    loadRecipes() {
      this.$store.dispatch('getRecipes');
    }
  }
};
</script>

<style src='@/assets/css/kimskitchen.css'></style>

<style>
</style>
