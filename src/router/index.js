import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  }
]

// THIS IS USED WHEN YOU ARE WRITING JUST A VUE APP
// const router = createRouter({
// 	history: createWebHistory(process.env.BASE_URL),
// 	routes,
// }); 

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router