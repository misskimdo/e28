<template>
    <div>
        <h3>Edit Recipe</h3>

        <div id="inputs">
            <div>
            <label for="name">Name</label>
            <input type="text" v-model="recipe.name" id="name" />
            <div v-if="showConfirmation">Please add a name.</div>
            </div>
            

            <div>
            <label for="description">Description</label>
            <textarea v-model="recipe.description" id="description"></textarea>
            <div v-if="showConfirmation">Please add a description.</div>
            </div>
            
            <div> 
            
            <label for="ingredients">Ingredients:</label>
            <textarea v-model="recipe.ingredients" id="ingredient"></textarea>
            </div>
            <div> 
            <label for="directions">Directions:</label>
            <textarea v-model="recipe.directions" id="direction"></textarea>
            </div>
        </div>

        <button v-on:click="addRecipe">Update Recipe</button>
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
                name: "",
                description:
                    "",
                ingredients:
                    "",
                directions:
                    "",
                
            },
        };
    },
    mounted() {
    this.editRecipe();
  },
    methods: {
        editRecipe() {
            axios.put('/recipe/{id}', this.recipe).then ((response) => {
                this.recipes = response.data.recipe;
            });
        }
    },
};
</script>

<style scoped>
#inputs {
    text-align: left;
    margin: 0 500px;
}

ul {
    list-style-type: none;
}
</style>