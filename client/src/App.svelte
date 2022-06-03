<script lang="ts">
	import How from './lib/How.svelte'

	async function getMessage() {
		const response = await fetch(`/message`)
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		try {
			let message = await response.json()
			return message
		} catch(error) {
			throw new Error(`JSON error!`)
		}
	}

	let isHowVisible = false

	function toggleHow() {
		isHowVisible = !isHowVisible
	}

	let promise = getMessage()
</script>

<main>
	{#await promise}
		<p>Loading message...</p>
	{:then message}
		<p>{message}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}

	<a href={'#'} on:click={toggleHow}>How it works</a>

	{#if isHowVisible}
		<How/>
	{/if}
</main>
