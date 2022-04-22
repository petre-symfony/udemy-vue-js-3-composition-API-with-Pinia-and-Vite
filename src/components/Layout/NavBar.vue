<template>
	<nav
		class="navbar is-success" role="navigation" aria-label="main navigation"
	>
		<div class="container is-max-desktop">
			<div class="navbar-brand">
				<a class="navbar-item is-size-4 is-family-monospace" >
					Noteballs
				</a>

				<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
			</div>

			<div class="navbar-end">
				<RouterLink
					class="navbar-item" to="/"
					active-class="is-active"
				>
					Notes
				</RouterLink>
				<RouterLink
					class="navbar-item" to="/stats"
					active-class="is-active"
				>
					Stats
				</RouterLink>

			</div>
		</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "NavBar"
}
</script>

<style scoped>

</style>
