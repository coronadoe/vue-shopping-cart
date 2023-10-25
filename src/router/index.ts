import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from "@/views/CatalogView.vue";
import ProductDetailView from '@/views/ProductDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: CatalogView
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProductDetailView
    }
  ]
})

export default router
