<template>
    <div id="categories-page">
        <h3>Categories</h3>
        <ul class="clean-list">
            <li v-for="(category, id) in categories" v-bind:key="id">
                {{ category }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        recipes: {
            type: Array,
            default: null,
        },
    },
    data() {
        return {};
    },
    computed: {
        categories() {
            let categories = this.recipes.map((recipe) =>
                recipe.categories.split("|")
            );
            let mergedCategories = [].concat.apply([], categories);
            // Return unique, sorted categories
            return [...new Set(mergedCategories)].sort();
        },
    },
};
</script>

<style>
</style>