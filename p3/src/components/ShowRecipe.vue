<template>
    <div>
        <div class="show-recipe">
            <div class="name" data-test="recipe-name">{{ recipe.name }}</div>
            <img class="thumb" v-bind:src="imgSrc"/>
        </div>
        <p class="description" data-test="recipe-description">{{ recipe.description }}</p>
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
    position: relative;
    margin-top: 20px;
}

.show-recipe:hover .name  {
    opacity: 1;
    text-align: center;
}

.name {
    position: absolute; 
    bottom: 0; 
    background: rgba(0, 67, 148, 0.7); 
    color: #f1f1f1; 
    text-transform: uppercase;
    width: 100%;
    transition: .5s ease;
    opacity:0;
    color: white;
    font-size: 20px;
    padding: 20px;
    text-align: center;
}

.thumb {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    height: auto;
    width: 300px;
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
    width: 300px;
}
</style>