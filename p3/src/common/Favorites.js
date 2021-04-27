import { reactive } from 'vue'

export default class Favorites {

    constructor() {
        // Extract JSON favorites string from local storage
        let favorites = localStorage.getItem('favorites');

        // Parse JSON favorites String to `items` Array
        let items = (favorites) ? JSON.parse(favorites) : [];

        // Make sure `items` is reactive so as it gets 
        // updated, changes will be reflected in our interface
        this.items = reactive(items);
    }

    getItems() {
        return this.items;
    }

    update() {
        localStorage.setItem('favorites', JSON.stringify(this.items))
    }

    add(id) {
        this.items.push({
            id: id,
        });
        this.update();
    }

    remove(id) {
        let item = this.getItem(id);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    getItem(recipeId) {
        return this.items.find(({ id }) => id === recipeId) || null;
    }
}