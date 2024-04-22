<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { scale, blur } from 'svelte/transition';

	export let isVisible: boolean;
	export let headerText: string = '';
	let durationTime = 500;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
{#if isVisible}
	<div
		class="modal-wrapper"
		class:visible={isVisible}
		on:click={() => (isVisible = false)}
		role="dialog"
		in:scale={{ duration: durationTime }}
		out:blur={{ duration: durationTime }}
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<div class="modal" on:click={(e) => e.stopPropagation()} role="dialog">
			<div class="flex items-center justify-between mb-4 py-2 border-b">
				<h3 class="text-xl font-medium text-gray-900">{headerText}</h3>
				<Button size="lg" color="none" class="h-10 w-10" on:click={() => (isVisible = false)}>
					<iconify-icon icon="ph:x-bold" />
				</Button>
			</div>
			<slot name="content" />
		</div>
	</div>
{/if}

<style>
	.modal-wrapper {
		background: rgba(255, 255, 255, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		min-width: 100vw;
		min-height: 100vh;
		justify-content: center;
		align-items: center;
		display: none;
		backdrop-filter: blur(5px);
	}
	.modal {
		background: #fff;
		border-radius: 15px;
		padding: 10px;
		min-width: 360px;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
	}
	.visible {
		display: flex;
	}
</style>
