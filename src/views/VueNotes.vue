<script setup>
	import { ref } from 'vue'
	/*
	notes
 */

	const newNote = ref('aaa')
	const notes = ref([
		{
			id: 'id1',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
		},
		{
			id: 'id2',
			content: 'This is a shorter note'
		}
	])
	const addNote = () => {
		let currentDate = new Date().getTime(),
				id = currentDate.toString()

		let note = {
			id,
			content: newNote.value
		}

		notes.value.unshift(note)

		newNote.value = ''
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

		<div
			v-for="note in notes" :key="note.id"
			class="card mb-4"
		>
			<header class="card-header">
				<p class="card-header-title">
					Component
				</p>
				<button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
				</button>
			</header>
			<div class="card-content">
				<div class="content">
					{{ note.content }}
				</div>
			</div>
			<footer class="card-footer">
				<a href="#" class="card-footer-item">Edit</a>
				<a href="#" class="card-footer-item">Delete</a>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	name: "VueNotes"
}
</script>

<style scoped>

</style>
