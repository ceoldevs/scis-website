<script lang="ts">
	import { base } from '$app/paths';
	import LatestNews from '$lib/components/home/LatestNews.svelte';
	import { marked } from 'marked';
	import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import Metatag from '$lib/components/Metatag.svelte';
	import {env} from '$env/dynamic/public' ;
	export let data: any;

	const flow = [
		{name: "Home", link: "/"},
		{name: "Programmes", link: "/acad/programmes"},
		{name: "M.Tech", link: "/acad/programmes/postgrad/mtech"},
	]
</script>

<Metatag data={{
	title:"M.Tech Page",
	description:"SCIS WEB M.Tech Page",
	link:`${env.PUBLIC_SVELTEURL??'http://localhost:5173'}/acad/programmes/postgrad/mtech`,
	img:`${env.PUBLIC_STRAPIURL??'http://localhost:1337'}/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z`,
	imgAlt:'SCIS Site',
	og:{
		title:"SCIS M.Tech Page",
		description:'SCIS WEB M.Tech Page'
	},
	twitter:{
		title: 'SCIS M.Tech page Twitter Card Title',
		description:'SCIS M.Tech Page Twitter Card Description'
	}
}}/>
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
	<Breadcrumb {flow} />
	<div class="prose prose-matty prose-custom max-w-5xl prose-table:table-auto prose-th:text-clip prose-th:overflow-hidden">
		<h2 class="font-fraunces text-font-medium text-4xl">
			M.Tech programme
		</h2>
		<div class="prose-h2:font-fraunces">
			{@html marked(data.data.attributes.mtech.content)}
		</div>
	</div>
</main>