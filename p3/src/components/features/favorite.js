import { ref, computed } from 'vue'
import { axios } from '@/common/app.js';
import { store } from '@/common/store.js';

export default function favorite(recipeId) {

    let addedFave = ref(false);
    let favoriteId = ref(null);

    let user = computed(() => {
        return store.state.user;
    });

    axios.get('/favorite/query?recipe_id=' + recipeId + '&user_id=' + user.value.id).then((response) => {
        if (response.data.favorite.length > 0) {
            favoriteId.value = response.data.favorite[0].id;
            addedFave.value = true;
        }
    });

    const addToFavorites = () => {
        axios.post('/favorite', {
            recipe_id: recipeId,
            user_id: user.value.id
        }).then((response) => {
            if (response.data.success) {
                addedFave.value = true;
                favoriteId.value = response.data.favorite.id;
            }
        });
    }
    
    const removeFromFavorites = () => {
        axios.delete('/favorite/' + favoriteId.value).then((response) => {
            if (response.data.success) {
                addedFave.value = false;
                favoriteId.value = null;
            }
        });
    }

    return { addedFave, addToFavorites, removeFromFavorites }
}