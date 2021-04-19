<template>
    <div id='add-recipe'>
        <h1>Add a New Recipe</h1>
<div v-if="showConfirmation" id='confirm'>Your recipe was added</div>
        <div>
        <ul>
      <li id='errors' v-for="error in errors" v-bind:key="error">{{ error.join('') }}</li>
    </ul>
    </div>
        <div id="inputs">
            <div>
            <label for="name">Name </label>
            <input type="text" v-model="recipe.name" id="name" />
            </div>
            
            <div>
            <label for="description">Description </label>
            <textarea v-model="recipe.description" id="description"></textarea>
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
                    "A fragrant fried-rice recipe, with strong Thai basil and spicy umami flavors. Add as much chili as you like for a kick.",
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
    padding-top: 200px;
    width: 500px;
    margin: auto;
}

@media only screen and (max-width: 600px) {
    #add-recipe {
        padding-top: 0;
    }
}

#inputs {
    text-align: left;
}

ul {
    list-style-type: none;
}

#confirm {
    color: white;
    background-color: teal;
    font-size: 13pt;
    font-weight: 100;
    text-transform: uppercase;
    padding: 10px;
}

#errors {
    color: white;
    background-color: #CC9817;
    font-size: 13pt;
    font-weight: 100;
    text-transform: uppercase;
    padding: 10px;
}
</style>