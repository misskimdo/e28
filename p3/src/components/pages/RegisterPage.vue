<template>
    <div id="register-page">
        <div id="registerForm">
                <h2>Register</h2>
                
                <div>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            v-model="data.name" 
                            data-test="register-name"/>
                    </label>
                    <label>
                        Email:
                        <input 
                            type="text" 
                            v-model="data.email" 
                            data-test="register-email"/>
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input 
                            type="password" 
                            v-model="data.password" 
                            data-test="register-password"/>
                    </label>
                </div>

                <button v-on:click="register" data-test="new-register-button">Register</button>

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
    components: {
    },
    data() {
        return {
            data: {
                name: "",
                email: "",
                password: "",
            },
            errors: null,
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        register() {
            axios.post("register", this.data).then((response) => {
                if (response.data.success) {
                    this.$store.commit("setUser", response.data.user);
                    // this.$router.push("/");
                } else {
                    this.errors = response.data.errors;
                }
            });
        },
    },

};
</script>
<style scoped>
#register-page {
    padding-top: 200px;
    width: 90%;
    text-align: center;
}

#registerForm {
    width: 50%;
    margin: auto;
    padding: 30px;
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