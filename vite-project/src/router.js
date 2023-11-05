import { createRouter, createWebHistory } from 'vue-router';
import page1 from './pages/1_playerManagement.vue';
import page2 from './pages/2_store.vue';
import page3 from './pages/3_game.vue';
import page3_1 from './pages/3_1_gameBoard.vue';

const routes = [
{ path: '/', component: page1 },
{ path: '/page2', component: page2 },
{ path: '/', component: page1 },
{ path: '/page3', component: page3 },
{ path: '/page3_1', component: page3_1 },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
