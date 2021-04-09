<template>

  <div class="show-recipe">
        <div class="name" >{{ name}}</div>

        <img
            class="thumb"
            v-bind:src="require('@/assets/images/foods/' + id + '.jpg')"
        />
        <p class="description">{{ description }}</p>
        <div class="ingredients">{{ ingredients }}</div>
        <div class="directions">{{ directions }}</div>
    </div>
</template>

<script>
import { recipes } from '@/common/recipes.js';
export default {
    data() {
    return {
    recipes: recipes,
    };
  },
    props: {
        recipe: {
            type: Object,
        },
        id: {
            type: String,
        },
        name: {
            type: String,
        },
        ingredients: {
            type: Text,
        },
    },
    
};
</script>

<style scoped>
.show-recipe {
    border: 1px solid var(--silver);
    text-align: center;
    padding: 15px;
    margin: 15px;
    width: 30%;
    min-width: 300px;
}

.name {
    height: 50px;
    font-size: 2rem;
    margin: 5px 0 10px 0;
    vertical-align: baseline;
    font-weight: bold;
}

.thumb {
    width: 480px;
    padding-bottom: 20px;
    border-radius: var(--radius);
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