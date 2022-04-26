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
	const newNoteRef = ref(null)

	const addNote = () => {
		storeNotes.addNote(newNote.value)

		newNote.value = ''
		newNoteRef.value.focus()
	}

</script>
<template>
	<div class="notes">
		<AddEditNote
			v-model="newNote"
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
