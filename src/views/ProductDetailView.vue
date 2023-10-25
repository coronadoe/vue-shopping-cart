<template>
    <div class="product">
        <div class="product-img">
            <img :src="selectedProduct.thumbnail" alt="">
        </div>
        <div class="product-details"></div>
    </div>    
</template>

<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        name: 'ProductDetailView'
    });
</script>

<script setup>

    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import { productsStore } from "@/stores/products";

    const store = productsStore();
    const route = useRoute();

    const selectedProduct = computed(() => {
        return store.products.find((item) => item.id === Number(route.params.id));
    } );


</script>


<style scoped>
</style>