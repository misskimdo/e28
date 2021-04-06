<template>
    <div id="products-page">
        <h2>Products</h2>
        <div id="products">
            <show-product
                v-for="product in products"
                v-bind:key="product.id"
                v-bind:product="product">
                <router-link :to="{path: '/product/'+product.id }">View Product</router-link>
            </show-product>
        </div>
    </div>  
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";
import { products } from "@/common/products.js";
export default {
    components: {
        "show-product": ShowProduct,
    },
    data() {
        return {
            products: products,
            /* Store links in an array to maintain order */
            links: [products],
            /* Map links to the appropriate component */
            paths: {
                product: '/products/:id',
            },
        };
    },
};
</script>

<style scoped>
#products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}
</style>