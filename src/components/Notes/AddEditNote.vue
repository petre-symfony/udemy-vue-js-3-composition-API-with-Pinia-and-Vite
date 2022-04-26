<template>
	<div class="card has-background-success-dark p-4 mb-5">
		<div class="field">
			<div class="control">
					<textarea
						class="textarea"
						placeholder="Add a new note"
						ref="newNoteRef"
						v-model="modelValue"
						@input="$emit('update:modelValue', modelValue)"
					/>
			</div>
		</div>

		<div class="field is-grouped is-grouped-right">
			<div class="control">
				<slot name="buttons"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AddEditNote"
}
</script>

<script setup>
	/*
		props
	 */
	const props = defineProps({
		modelValue: {
			type: String,
			required: true
		}
	})

	/*
		emits
	 */
	const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>
