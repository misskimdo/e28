<template>

  <div class="show-recipe">
        <div class="name">{{ recipe.name }}</div>

        <img
            class="thumb"
            v-bind:src="require('@/assets/images/foods/' + recipe.id + '.jpg')"
        />
        <!-- <p class="description">{{ recipe.description }}</p>
        <div class="ingredients">{{ recipe.ingredients }}</div>
        <div class="directions">{{ recipe.directions }}</div> -->
    </div>
</template>

<script>
export default {
    props: {
        recipe: {
            type: Object,
        },
        id: {
            type: String,
        },
    },
    
};
</script>

<style scoped>
.show-recipe {
    border: 1px solid var(--silver);
    text-align: center;
    color: black;
    padding: 15px;
    margin: 15px;
    width: 30%;
    min-width: 200px;
}

a:link {
  text-decoration: none;
}

.name {
    height: 50px;
    font-size: 2rem;
    margin: 5px 0 10px 0;
    vertical-align: baseline;
    font-weight: bold;
}

.thumb {
    width: 100%;
    max-width: 300px;
    padding-bottom: 20px;
    border-radius: var(--radius);
}

.description {
    margin: auto;
    text-align: left;
    font-style: italic;
    font-size: 10pt;
    line-height: 1.5;
}

.ingredients {
    font-family: var(--serif-font);
    font-size: 12pt;
    padding: 10px;
}
</style>