<template>
	<div class="edit-note">
		<AddEditNote
			ref="addEditNoteRef"
			v-model="noteContent"
		>
			<template #buttons>
				<button
					class="button is-link has-background-success"
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

	/*
		note
	 */
	const noteContent = ref('')
</script>
<style scoped>

</style>
