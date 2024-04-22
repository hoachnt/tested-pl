<script>
	import '../app.postcss';
	import Navbar from './navbar/+page.svelte';
	import Footer from './footer/+page.svelte';
	import 'iconify-icon';
</script>

<section>
	<Navbar />
	<div class="main">
		<slot />
	</div>
	<Footer />
</section>

<style>
	.main {
		min-height: 100vh;
	}
</style>
