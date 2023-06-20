<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	// import AnimateSlide from "$lib/components/AnimateSlide.svelte";
	
</script>

<a class="fixed z-[2000] translate-y-[-100%] focus:translate-y-0 w-28 h-16 text-center text-white py-6 bg-primary-light text-xs" href='#main'>Skip To Content</a>	
<div >
	<Header />
</div>
<main class="pt-16 min-h-[90vh]" id="main">
	<slot />
</main>
<div class="mt-auto" id="footer">
	<Footer />
</div>


	
