<template>
    <div class="products-list">
        <div 
            class="product"
            v-for="product in store.products"
            :key="product.id"
            @click="goToProduct(product.id)"
        >
            <img :src="product.thumbnail" alt="">

            <h2>{{ product.brand }}</h2>

            <p> Description: {{ product.description }} </p>
            <p> Price: ${{ new Intl.NumberFormat('en-IN').format(product.price) }} </p>

        </div>
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        name: 'CatalogView'
    });

</script>

<script setup>
    import { onMounted, computed } from "vue";
    import { productsStore } from "@/stores/products";
    import { useRouter } from "vue-router";

    const store = productsStore();
    const router = useRouter();

    const goToProduct = (id) => {
        router.push({ 
            name: 'ProductView', 
            params: {id}
        });
    }

    onMounted( async () => {
        await store.fetchProducts();
    });

</script>


<style scoped>

    .products-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .product {
        flex-basis: 28%;
        margin: 8px;
        padding: 16px;
        box-shadow: 0px 0px 14px 1px #e6e6e6;
        cursor: pointer;
    }

    .product img {
        width: 50%;
        height: auto;
    }

</style>