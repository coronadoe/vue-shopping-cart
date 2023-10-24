<template>
    <div class="item">
        <div>
            Image here
        </div>
        <div>
            {{ item.title }}
        </div>

        <div>
            Price: <span> {{ item.price }} </span>
        </div>

        <div>
            Qty: <span> {{ item.quantity }} </span>
        </div>

        <div>
            <MainButton
                :text="Add" 
                @btn-click="$emit('add-item-to-shopping-cart')" />
        </div>
    </div>
</template>

<script>

    import MainButton from '../generic/MainButton.vue';

    export default {
        name: 'ItemList',

        props: {
            item: Object
        },

        components: {
            MainButton
        }
    }

</script>

<style scoped>
    .item {
        font-size: 12px;
    }

</style>