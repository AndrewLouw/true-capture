import { createApp } from 'vue';  // Correct import for Vue 3
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';  // Correct import for Vue Router 4

// Import your page components
import HomePage from './views/HomePage.vue';
import MissionPage from './views/MissionPage.vue';
import ContactPage from './views/ContactPage.vue';

// Define your routes
const routes = [
  { path: '/', component: HomePage },
  { path: '/mission', component: MissionPage },
  { path: '/contact', component: ContactPage },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),  // Use HTML5 History mode
  routes,
});

// Create the Vue app instance and mount it
createApp(App)
  .use(router)  // Use the router
  .mount('#app');
