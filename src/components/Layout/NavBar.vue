<template>
	<nav
		class="navbar is-success" role="navigation" aria-label="main navigation"
	>
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
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
				<div class="navbar-item">
					<RouterLink class="navbar-item" to="/">
						Notes
					</RouterLink>
					<RouterLink class="navbar-item" to="/stats">
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
