<template>
    <div id="add-recipe">
        <h1>Add a New Recipe</h1>
        <p><i>All fields are required.</i></p>
        <div v-if="showConfirmation" id="confirm" data-test="recipe-added-confirmation">Your recipe was added</div>

        <div>
        <ul>
            <li id="errors" v-for="error in errors" v-bind:key="error">{{ error.join("") }}</li>
        </ul>
        </div>

        <div id="inputs">
            <div>
                <label for="name">Name </label>
                    <input type="text" v-model="recipe.name" id="name" v-on:blur="validate" data-test="recipe-name-input"/>
            </div>
            
            <div>
                <label for="description">Description </label>
                    <textarea v-model="recipe.description" id="description" v-on:blur="validate" data-test="recipe-description-input"></textarea>
            </div>
            
            <div> 
                <label for="ingredients">Ingredients </label>
                    <textarea v-model="recipe.ingredients" id="ingredient" v-on:blur="validate" data-test="recipe-ingredients-input"></textarea>
            </div>

            <div> 
                <label for="directions">Directions </label>
                    <textarea v-model="recipe.directions" id="direction" v-on:blur="validate" data-test="recipe-directions-input"></textarea>
            </div>

            <div> 
                <label for="directions">Categories </label>
                    <textarea v-model="recipe.categories" id="categories" v-on:blur="validate" data-test="recipe-categories-input"></textarea>
            </div>
        </div>

        <button v-on:click="addRecipe" data-test="add-recipe-button">Add Recipe</button>
    </div>
</template>

<script>
import { axios } from "@/common/app.js";
import Validator from "validatorjs"

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
                    "5 garlic cloves, 1 to 5 Thai chili to your taste, 1 medium shallot",
                directions:
                    "Grind garlic and Thai chili together in a mortar and pestle. This way the natural oils from chili and garlic will be released and will make the fried rice more fragrant",
                categories:
                    "fried rice",
                
            },
        };
    },
    methods: {
        validate() {
            let validator = new Validator(this.recipe, {
                name: "required|between:3,100",
                description: "required|min:50",
                ingredients: "required|min:50",
                directions: "required|min:100",
                categories: "required|between:3,100",
            });

            if (validator.fails()) {
                this.errors = validator.errors.all();
            } else {
                this.errors = null;
            }

            return validator.passes();
        },
        addRecipe() {
            if(this.validate()){
            axios.post("/recipe", this.recipe).then ((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    this.showConfirmation = false;
                } else {
                    this.$emit("update-recipes");
                    this.showConfirmation = true;
                }
            });
            this.recipe = {}
        }
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
    width: 90%;
    font-size: 10pt;
    font-weight: 100;
    text-transform: uppercase;
    padding: 10px;
}
</style>