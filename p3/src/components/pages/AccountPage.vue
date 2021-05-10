<template>
    <div id="account-page">
        <div v-if="user">
            <h2 data-test="welcome-message">Hi, {{ user.name }}!</h2>

            <div id="favorites">
                <h3><b>Your Favorites</b></h3>
                <p v-if="favorites && favorites.length == 0">
                    You don't have any favorites. <router-link to="/recipes">Add some.</router-link>
                </p>
                <ul>
                    <li v-for="(favorite, key) in favorites" v-bind:key="key">
                        {{ favorite.name }}
                    </li> 
                </ul>
            </div>

            <button v-on:click="logout" data-test="logout-button">Logout</button>
        </div>

        <div v-else>
            <div id="loginForm">
            <h2>Login</h2>
            <div>
                <label>
                    Email:
                    <input type="text" v-model="data.email" data-test="test-email"/>
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" v-model="data.password" data-test="password-input"/>
                </label>
            </div>

            <button v-on:click="login" data-test="login-button">Login</button>

            <router-link to="/register" class="register_btn" data-test="register-button">Register</router-link>

            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
            </div>
        </div>

    </div>
</template>

<script>
import { axios } from "@/common/app.js";
import favorite from '@/components/features/favorite.js'; 


export default {
    components: {
        
    },
    setup(props) {
        const { addedFave, addToFavorites, removeFromFavorites } = favorite(
            props.id
        );
        return { addedFave, addToFavorites, removeFromFavorites };
    },
    data() {
        return {
            data: {
                name: "",
                email: "",
                password: "",
            },
            errors: null,
            favorites: [],
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        recipes() {
            return this.$store.state.recipes;
        },
    },
    methods: {
        loadFavorites() {
            if (this.user) {
                axios
                    .get("favorite/query?user_id=" + this.user.id)
                    .then((response) => {
                        this.favorites = response.data.favorite.map(
                            (favorite) => {
                                return this.$store.getters.getRecipeById(
                                    favorite.recipe_id
                                );
                            }
                        );
                    });
            }
        },
        login() {
            axios.post("login", this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit("setUser", response.data.user);
                } else {
                    this.errors = response.data.errors;
                }
            });
        },
        logout() {
            axios.post("logout").then((response) => {
                if (response.data.success) {
                    this.$store.commit("setUser", false);
                }
            });
        },
        register() {
            axios.post("register", this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit("setUser", response.data.user);
                } else {
                    this.errors = response.data.errors;
                }
            });
        },
    },
    watch: {
        user() {
            this.loadFavorites();
        },
    },
    mounted() {
        this.loadFavorites();
    },
};
</script>
<style scoped>
#account-page {
    padding-top: 200px;
    width: 90%;
    text-align: center;
}

#loginForm {
    width: 50%;
    margin: auto;
    padding: 30px;
}

#inputs {
    text-align: left;
}

ul {
    list-style-type: none;
    margin-left: 0; 
    padding-left: 0;
}

#confirm {
    color: white;
    background-color: teal;
    font-size: 13pt;
    font-weight: 100;
    text-transform: uppercase;
    padding: 10px;
}

.register_btn {
    padding-left: 20px;
}

.error {
    color: white;
    background-color: #CC9817;
    font-size: 13pt;
    font-weight: 100;
    text-transform: uppercase;
    text-align: center;
    padding: 10px;
    width: 90%;
}

@media only screen and (max-width: 600px) {
    #account-page {
        padding-top: 0;
    }

    #loginForm {
    width: 90%;
    margin: auto;
    }
}

</style>