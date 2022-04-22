<template>
	<div class="notes">
		<div
			v-for="i in 3"
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
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
