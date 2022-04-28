<template>
	<div class="stats">
		<table class="table is-fullwidth">
			<thead>
				<tr>
					<th>Stat</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Number of Notes</td>
					<td>{{ storeNotes.totalNotesCount }}</td>
				</tr>
				<tr>
					<td>Number of Character (of all notes)</td>
					<td>{{ storeNotes.totalCharactersCount }}</td>
				</tr>
			</tbody>
		</table>
		<input
			class="input"
			type="text"
			placeholder="Do you love noteballs??"
			v-model="loveNoteballs"
			v-autofocus
		>
	</div>
</template>

<script>
export default {
	name: "VueStats"
}
</script>

<script setup>
	/*
	imports
	 */
	import { useStoreNotes } from "@/stores/storeNotes"
	import { vAutofocus } from "@/directives/vAutofocus"
	import { useWatchCharacters } from "@/use/useWatchCharacters"
	import { ref } from 'vue'

	/*
	store
	 */
	const storeNotes = useStoreNotes()

	/*
	love noteballs
	 */
	const loveNoteballs = ref('')
	useWatchCharacters(loveNoteballs)
</script>

<style scoped>

</style>
