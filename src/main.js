import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import VueNotes from "@/views/VueNotes.vue"
import VueStats from "@/views/VueStats.vue"

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'notes',
			component: VueNotes
		},
		{
			path: '/stats',
			name: 'stats',
			component: VueStats
		}
	]
})

createApp(App).use(router).mount('#app')
