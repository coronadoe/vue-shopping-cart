<template>
    <div :key="item.id" v-for="item in lists" class="item-list">
        <ItemList :item="item" />
    </div>
</template>

<script>
    import ItemList from './ItemList.vue'

    export default {
        name: 'ItemsDisplay',
        components: {
            ItemList
        },

        data() {
            return {
                lists: [],
            }
        },

        created() {
            this.list = [
                {
                    id: 1,
                    title: 'something 1',
                    price: '2.00',
                    quantity: 10,
                },
                {
                    id: 2,
                    title: 'something 2',
                    price: '3.00',
                    quantity: 5,
                },
                {
                    id: 3,
                    title: 'something 3',
                    price: '2.00',
                    quantity: 100,
                }
            ];
        }
    }
</script>

<style scoped>
    .item-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
</style>