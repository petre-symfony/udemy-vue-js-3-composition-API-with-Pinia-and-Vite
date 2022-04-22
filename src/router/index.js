import {createRouter, createWebHashHistory} from "vue-router";
import VueNotes from "@/views/VueNotes.vue"
import VueStats from "@/views/VueStats.vue"

const routes = [
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

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
