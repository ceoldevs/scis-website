<script>
	import { page } from '$app/stores';
	import Breadcrumb from "$lib/components/Breadcrumb.svelte";
	const flow = [
		{name: "Home", link: "/"},
		{name: "People", link: "/people"},
		{name: "Faculty", link: "/people/faculty"},
	]
</script>

<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
	<Breadcrumb flow={flow}/>
		<div class="flex flex-col w-full items-center gap-y-6">
			<span class="material-symbols-rounded text-5xl text-error-50">error</span>
			<span>
				Looks like our <span class="text-primary-40">data servers</span> are down &#128531;. Please try later
			</span>
		</div>
</main>