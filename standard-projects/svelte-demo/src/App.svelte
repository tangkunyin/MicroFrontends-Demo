<script>
	export let name;
	let src = "assets/logo.png";
</script>

<main>
	<img src={src} alt="logo">
	<h1>Svelte {name}</h1>
</main>

<style>
	main {
		text-align: center;
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

</style>