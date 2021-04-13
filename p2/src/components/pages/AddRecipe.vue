<template>
    <div>
        <h3 id='add-recipe'>Add a New Recipe</h3>

        <div id="inputs">
            <div>
            <label for="name">Name </label>
            <input type="text" v-model="recipe.name" id="name" />
            <div v-if="showConfirmation">Please add a name.</div>
            </div>
            
            <div>
            <label for="description">Description </label>
            <textarea v-model="recipe.description" id="description"></textarea>
            <div v-if="showConfirmation">Please add a description.</div>
            </div>
            
            <div> 
            <label for="ingredients">Ingredients </label>
            <textarea v-model="recipe.ingredients" id="ingredient"></textarea>
            </div>

            <div> 
            <label for="directions">Directions </label>
            <textarea v-model="recipe.directions" id="direction"></textarea>
            </div>
        </div>

        <button v-on:click="addRecipe">Add Recipe</button>
        <div v-if="showConfirmation">Your recipe was added</div>
        <h4><ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul></h4>
    </div>
</template>

<script>
import { axios } from "@/common/app.js";
export default {
    data() {
        return {
            showConfirmation: false,
            errors: null,
            recipe: {
                name: "Thai Basil Fried Rice",
                description:
                    "A super fragrant fried-rice recipe, with strong Thai basil scents and spicy umami flavors. Add as much chili as you like for a kick.",
                ingredients:
                    "5 garlic cloves",
                directions:
                    "Grind garlic and thai chili together in a mortar and pestle.",
                
            },
        };
    },
    methods: {
        addRecipe() {
            axios.post('/recipe', this.recipe).then ((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    this.showConfirmation = false;
                } else {
                    this.$emit("update-products");
                    this.showConfirmation = true;
                }
            });
            this.recipe = {}
        }
    },
};
</script>

<style scoped>

#add-recipe {

}

#inputs {
    text-align: left;
    margin: 0 500px;
}

ul {
    list-style-type: none;
}
</style>