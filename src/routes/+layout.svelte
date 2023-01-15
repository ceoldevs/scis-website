<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	// import AnimateSlide from "$lib/components/AnimateSlide.svelte";
</script>

<div class="z-[1]">
	<Header />
	<main class="pt-16">
		<slot />
	</main>
	<Footer />
	
</div>
