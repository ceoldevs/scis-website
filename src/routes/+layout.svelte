<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	// import AnimateSlide from "$lib/components/AnimateSlide.svelte";
</script>

<div>
	<Header />
</div>
<main class="pt-16 min-h-[90vh]">
	<slot />
</main>
<div class="mt-auto">
	<Footer />
</div>
	
