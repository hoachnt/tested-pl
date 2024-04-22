<script lang="ts">
	import { onMount } from 'svelte';

	let dashBoard: HTMLElement;
	let windowWidth = 0;
	let windowHeight = 0;

	function drawDashboard(x: number, y: number, square: number) {
		const dashBoardWidth: number = x / square;
		const dashBoardHeight: number = y / square;

		dashBoard.style.width = `${x}px`;
		dashBoard.style.height = `${y}px`;

		drawSquares(square, dashBoardWidth, dashBoardHeight);
	}
	function drawSquares(squareSize: number, dashBoardWidth: number, dashBoardHeight: number) {
		for (let i = 1; i <= dashBoardHeight; i++) {
			let squares = [];

			if (i % 2 === 0) {
				for (let j = 1; j <= dashBoardWidth; j++) {
					let square = document.createElement('div');

					if (j % 2 === 0) {
						square.style.background = '#000';
					} else {
						square.style.background = '#fff';
					}

					square.style.width = `${squareSize}px`;
					square.style.height = `${squareSize}px`;

					squares.push(square);
				}
			} else {
				for (let j = 1; j <= dashBoardWidth; j++) {
					let square = document.createElement('div');

					if (j % 2 === 0) {
						square.style.background = '#fff';
					} else {
						square.style.background = '#000';
					}

					square.style.width = `${squareSize}px`;
					square.style.height = `${squareSize}px`;

					squares.push(square);
				}
			}

			squares.forEach((square) => {
				dashBoard.appendChild(square);
			});
		}
	}

	onMount(() => {
		drawDashboard(windowWidth, windowHeight, 90);
	});
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />
<section bind:this={dashBoard} class="dashBoard" />

<style>
	.dashBoard {
		display: flex;
		flex-wrap: wrap;
	}
</style>
