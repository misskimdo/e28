<template>

  <div id='show-recipe'>
        <img id='recipe-img' v-bind:src='imgSrc'/>

        <div id='recipe-details'>
            <h1>{{ recipe.name}}</h1>
            <p>{{ recipe.description }}</p>
            <h3>Ingredients</h3>
            <ul>{{ recipe.ingredients.split('|').join(' •  ') }} </ul>
            <h3>Directions</h3>
            <ul>{{ recipe.directions.split('|').join(' ') }}</ul>
            <h3>Categories</h3>
            <ul>{{ recipe.categories.split('|').join(', ') }}</ul>
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
        name: {
            type: String,
        }
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
        }
    },
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

.description {
    margin: auto;
    font-style: italic;
    font-size: 13pt;
    line-height: 1.5;
}

</style>