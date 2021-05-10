import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/common/store';

const routes = [
    {
        path: '/',
        component: () => import('@/components/pages/HomePage.vue'),
    },
    {
        path: '/recipes',
        component: () => import('@/components/pages/RecipesPage.vue'),
    },
    {
        path: '/recipe/:id',
        component: () => import('@/components/pages/RecipePage.vue'),
        props: true,
    },
    {
        path: '/recipe/new',
        component: () => import('@/components/pages/AddRecipe.vue'),
        // Not used on this app, but this meta line would be used for other uses of authorizing required pages:
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/recipe/:id',
        component: () => import('@/components/pages/RecipePage.vue'),
        props: true,
    },
    {
        path: '/account',
        component: () => import('@/components/pages/AccountPage.vue'),
    },
    {
        path: '/register',
        component: () => import('@/components/pages/RegisterPage.vue'),
    },
    {
        path: '/denied',
        component: () => import('@/components/pages/AccessDeniedPage.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach(async (to) => {

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    const decide = (user) => {
        if (requiresAuth && !user) {
            return '/denied';
        } else {
            return true;
        }
    }

    if (store.state.user === null) {
        let authUser = await store.dispatch('authUser');
        if (authUser !== null) {
            return decide(store.state.user);
        }
    } else {
        return decide(store.state.user);
    }
});

export { router };