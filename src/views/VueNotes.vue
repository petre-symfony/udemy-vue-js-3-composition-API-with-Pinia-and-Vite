<script setup>
	import { ref } from 'vue'
	import Note from "@/components/Notes/Note.vue"
	import { useStoreNotes } from "@/stores/storeNotes"

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
		/*
		let currentDate = new Date().getTime(),
				id = currentDate.toString()

		let note = {
			id,
			content: newNote.value
		}
		
		notes.value.unshift(note)

	 	*/
		storeNotes.addNote()

		newNote.value = ''
		newNoteRef.value.focus()
	}

	/*
		delete note
	 */
	const deleteNote = (idToDelete) => {
		notes.value = notes.value.filter((note) => {
			return note.id !== idToDelete
		})
	}

</script>
<template>
	<div class="notes">
		<div class="card has-background-success-dark p-4 mb-5">
			<div class="field">
				<div class="control">
					<textarea
						class="textarea"
						placeholder="Add a new note"
						v-model="newNote"
						ref="newNoteRef"
					/>
				</div>
			</div>

			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<button
						class="button is-link has-background-success"
						@click="addNote"
						:disabled="!newNote"
					>
						Add New Note
					</button>
				</div>
			</div>
		</div>

		<Note
			v-for="note in storeNotes.notes" :key="note.id"
			:note="note"
			@deleteClicked="deleteNote"
		/>
	</div>
</template>

<script>
export default {
	name: "VueNotes"
}
</script>

<style scoped>

</style>
