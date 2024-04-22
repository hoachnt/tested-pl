<script lang="ts">
	import { Button, Input } from 'flowbite-svelte';
	import Modal from './modal/+page.svelte';

	let count: number = 0;
	let isVisible: boolean = false;

	let counter = () => count++;
	let discounter = () => count--;
</script>

<section>
	<h1>Welcome to SvelteKit</h1>
	<div class="counter-wrapper">
		<div class="counter">
			<button on:click={discounter}>-</button>
			<input bind:value={count} type="number" class="text-center w-fit" />
			<button on:click={counter}>+</button>
		</div>
	</div>
	<Button on:click={() => (isVisible = true)} class="mt-2">Open modal</Button>
	<Modal bind:isVisible headerText="Login">
		<form slot="content">
			<Input size="lg" required placeholder="Name" color="base" type="email" class="mb-1" />
			<Input size="lg" required placeholder="Password" color="base" type="password" class="mb-1" />
			<Button class="min-w-full" size="xl">Login</Button>
		</form>
	</Modal>
</section>

<style>
	section {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}
	.counter {
		background: #000;
		color: #fff;
		max-width: fit-content;
	}
	.counter-wrapper {
		min-width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	button {
		color: #fff;
		text-transform: capitalize;
		text-decoration: none;
		padding: 10px;
		border: none;
		background-color: #000;
		cursor: pointer;
	}
	button:hover {
		background: #3886ec;
		padding: 10px 20px;
	}
	input {
		border: none;
		padding: 8px 2px;
		transition: 0.2s ease-in-out;
		color: #000;
	}
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield; /* Для Firefox */
	}
</style>
