import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/Home.vue';
import WeatherView from '@/views/Weather.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/weather', component: WeatherView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
