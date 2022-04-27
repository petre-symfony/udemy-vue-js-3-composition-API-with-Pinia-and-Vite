<template>
	<div class="edit-note">
		<AddEditNote
			ref="addEditNoteRef"
			v-model="noteContent"
			bgColor="link"
			placeholder="Edit Note"
			label="Edit Note"
		>
			<template #buttons>
				<button
					@click="$router.push('/')"
					class="button is-link is-light mr-2"
				>
					Cancel
				</button>
				<button
					class="button is-link has-background-link"
					:disabled="!noteContent"
					@click="handleSaveClicked"
				>
					Save Note
				</button>
			</template>
		</AddEditNote>

	</div>
</template>

<script>
export default {
	name: "ViewEditNote"
}
</script>

<script setup>
	/*
		imports
	 */
	import AddEditNote from "@/components/Notes/AddEditNote.vue"
	import { ref } from 'vue'
	import { useStoreNotes } from "@/stores/storeNotes"
	import { useRoute, useRouter } from 'vue-router'

	/*
		router
	 */
	const route = useRoute()
	const router = useRouter()

	/*
		store
	 */
	const storeNotes = useStoreNotes()

	/*
		note
	 */
	const noteContent = ref('')

	noteContent.value = storeNotes.getNoteContent(route.params.id)

	/*
	save clicked
	 */
	const handleSaveClicked = () => {
		storeNotes.updateNote(route.params.id, noteContent.value)
		router.push('/')
	}
</script>
<style scoped>

</style>
