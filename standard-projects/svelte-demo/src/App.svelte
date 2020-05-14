<script>
	export let name;
</script>

<main>
	<h1>Svelte {name}</h1>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		height: calc(100% - 2em);
		margin: 0 auto;
		background-color: antiquewhite;
		display: flex;
		align-items: center;
		justify-content: center
	}

	h1 {
		color: #ff3e00;
		/* text-transform: uppercase; */
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>