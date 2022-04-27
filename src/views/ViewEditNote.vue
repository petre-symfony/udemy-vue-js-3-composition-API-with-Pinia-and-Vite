<template>
	<div class="edit-note">
		<AddEditNote
			ref="addEditNoteRef"
			v-model="noteContent"
			bgColor="link"
		>
			<template #buttons>
				<button
					class="button is-link has-background-link"
					:disabled="!noteContent"
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
