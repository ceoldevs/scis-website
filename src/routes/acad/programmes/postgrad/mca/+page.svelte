<script lang="ts">
	import { base } from '$app/paths';
	import LatestNews from '$lib/components/home/LatestNews.svelte';
	import { marked } from 'marked';
	import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import Metatag from './Metatag.svelte';
	export let data: any;

	const flow = [
		{name: "Home", link: "/"},
		{name: "Programmes", link: "/acad/programmes"},
		{name: "MCA", link: "/acad/programmes/postgrad/mca"},
	]
</script>

<Metatag />
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
	<Breadcrumb {flow} />
	<div class="prose prose-matty prose-custom max-w-5xl prose-table:table-auto prose-th:text-clip prose-th:overflow-hidden">
		<h2 class="font-fraunces text-font-medium text-4xl">
			MCA programme
		</h2>
		<div class="prose-h2:font-fraunces">
			{@html marked(data.data.attributes.mca.content)}
		</div>
	</div>
</main>