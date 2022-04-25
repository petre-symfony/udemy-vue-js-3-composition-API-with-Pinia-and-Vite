import {createRouter, createWebHashHistory} from "vue-router";
import VueNotes from "@/views/VueNotes.vue"
import VueEditNote from "@/views/VueEditNote.vue"
import VueStats from "@/views/VueStats.vue"

const routes = [
	{
		path: '/',
		name: 'notes',
		component: VueNotes
	},
	{
		path: '/editNote/:id',
		name: 'edit-note',
		component: VueEditNote
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
