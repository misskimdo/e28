<template>

  <div class="show-recipe">
        <div class="name">{{ recipe.name }}</div>

        <img
            class="thumb"
            v-bind:src="imgSrc"
        />
    <p class="description">{{ recipe.description }}</p>
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
    computed: {
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
    border: 1px solid lightgrey;
    text-align: center;
    color: black;
    padding: 15px;
    margin: 15px;
    width: 30%;
    min-width: 300px;
    font-size: 10pt;
    font-family: Nunito;
    font-weight: 100;
    text-transform: uppercase;
    height: 590px;
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
    text-align: center;
    font-size: 10pt;
    line-height: 1.5;
    font-size: 12pt;
    font-family: Nunito;
    font-weight: 200;
    text-transform: none;
}
</style>