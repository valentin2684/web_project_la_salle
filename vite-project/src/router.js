import { createRouter, createWebHistory } from 'vue-router';
import page0 from './pages/0_createPlayer.vue';
import page1 from './pages/1_playerManagement.vue';
import page2 from './pages/2_store.vue';
import page3 from './pages/3_game.vue';
import admin_1 from './pages/admin_1_status.vue';

const routes = [
  { path: '/', component: page0 },
  { path: '/page1', component: page1 },
  { path: '/page2', component: page2 },
  { path: '/page3', component: page3 },
  { path: '/admin_1', component: admin_1 },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
