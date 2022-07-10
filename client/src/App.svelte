<script lang="ts">
	import {onMount} from 'svelte';

	import type {IMessageResult} from './iMessageResult'

	import How from './lib/How.svelte'

	async function getMessage() {
		const response = await fetch(`/message`)
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		try {
			let messageResult = await response.json() as IMessageResult;
			return messageResult.message
		} catch(error) {
			throw new Error(`JSON error!`)
		}
	}

	let isHowVisible = false

	function toggleHow() {
		isHowVisible = !isHowVisible
	}

	let promise = getMessage()

	onMount(() => {
		let websocket = new WebSocket('wss://api-finland-43oubvregq-lz.a.run.app/connect');
		websocket.addEventListener('open', () => {
			console.log('opened');
		});
	});
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
