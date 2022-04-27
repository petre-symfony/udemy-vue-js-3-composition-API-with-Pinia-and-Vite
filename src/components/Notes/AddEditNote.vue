<template>
	<div class="card has-background-link-dark p-4 mb-5">
		<div class="field">
			<div class="control">
					<textarea
						class="textarea"
						placeholder="Add a new note"
						ref="textareaRef"
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
		imports
	 */
	import { ref } from "vue"

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

	/*
		focus textarea
	 */
	const textareaRef = ref(null)

	const focusTextarea = () => {
		textareaRef.value.focus()
	}

	defineExpose({
		focusTextarea
	})
</script>

<style scoped>

</style>
