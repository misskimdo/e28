import {
    createApp
} from 'vue'
import App from './App.vue'

import {
    createRouter,
    createWebHistory
} from 'vue-router';
import HomePage from '@/components/pages/HomePage.vue';
import RecipesPage from '@/components/pages/RecipesPage.vue';
import RecipePage from '@/components/pages/RecipePage.vue';
import AddRecipe from '@/components/pages/AddRecipe.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: HomePage
        },
        {
            path: '/recipes',
            component: RecipesPage
        },
        {
            path: '/recipe/:id',
            component: RecipePage,
            props: true
        },
        {
            path: '/recipe/new',
            component: AddRecipe
        },
    ]
})

createApp(App).use(router).mount('#app')