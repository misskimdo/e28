<template>
    <div id="account-page">
        <div v-if="user">
            <h2>Hi, {{ user.name }}!</h2>

            <div id="favorites">
                <strong>Your Favorites</strong>
                <p v-if="favorites && favorites.length == 0">
                    No favorites yet.
                </p>
                <li v-for="(favorite, key) in favorites" v-bind:key="key">
                    {{ favorite.name }}
                </li>
            </div>

            <button v-on:click="logout">Logout</button>
        </div>

        <div v-else id="loginForm">
            <h2>Login</h2>
            
            <div>
                <label>
                    Email:
                    <input type="text" v-model="data.email" />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" v-model="data.password" />
                </label>
            </div>

            <button v-on:click="login">Login</button>

            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
    data() {
        return {
            // Form is prefilled for demonstration purposes; remove in final application
            // jill@harvard.edu/asdfasdf is one of our seed users from e28api/seeds/user.json
            data: {
                email: "jill@harvard.edu",
                password: "asdfasdf",
            },
            errors: null,
            favorites: [],
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        products() {
            return this.$store.state.products;
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
                                return this.$store.getters.getProductById(
                                    favorite.product_id
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
                    this.$store.commit("setUser", null);
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