<script setup>
	import { ref } from 'vue'
	import Note from "@/components/Notes/Note.vue"
	import { useStoreNotes } from "@/stores/storeNotes"
	import AddEditNote from "@/components/Notes/AddEditNote.vue"

	/*
		store
	 */
	const storeNotes = useStoreNotes()

	/*
	notes
 */
	const newNote = ref('')
	const addEditNoteRef = ref(null)

	const addNote = () => {
		storeNotes.addNote(newNote.value)
		newNote.value = ''
		addEditNoteRef.value.focusTextarea()
	}

</script>
<template>
	<div class="notes">
		<AddEditNote
			v-model="newNote"
			ref="addEditNoteRef"
			placeholder="Add a new note"
		>
			<template #buttons>
				<button
					class="button is-link has-background-success"
					@click="addNote"
					:disabled="!newNote"
				>
					Add New Note
				</button>
			</template>
		</AddEditNote>

		<Note
			v-for="note in storeNotes.notes" :key="note.id"
			:note="note"
		/>
	</div>
</template>

<script>
export default {
	name: "ViewNotes"
}
</script>

<style scoped>

</style>
