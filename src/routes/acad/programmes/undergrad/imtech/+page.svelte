<script lang="ts">
	import { marked } from 'marked';
	import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import Metatag from '$lib/components/Metatag.svelte';
	import {env} from '$env/dynamic/public' ;
	export let data: any;

	const flow = [
		{name: "Home", link: "/"},
		{name: "Programmes", link: "/acad/programmes"},
		{name: "I.M.Tech", link: "/acad/programmes/undergrad/imtech"},
	]
</script>

<Metatag data={{
	title:"I.M.Tech Page",
	description:"SCIS WEB I.M.Tech Page",
	link:`${env.PUBLIC_SVELTEURL??'http://localhost:5173'}/acad/programmes/undergrad/imtech`,
	img:`${env.PUBLIC_STRAPIURL??'http://localhost:1337'}/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z`,
	imgAlt:'SCIS Site',
	og:{
		title:"SCIS I.M.Tech Page",
		description:'SCIS WEB I.M.Tech Page'
	},
	twitter:{
		title: 'SCIS I.M.Tech page Twitter Card Title',
		description:'SCIS I.M.Tech Page Twitter Card Description'
	}
}}/>
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
	<Breadcrumb {flow} />
	<div class="prose prose-matty prose-custom max-w-5xl prose-table:table-auto prose-th:text-clip prose-th:overflow-hidden">
		<h2 class="font-fraunces text-font-medium text-4xl">
			I.M.Tech programme
		</h2>
		<div class="prose-h2:font-fraunces">
			{@html marked(data.data.attributes.imtech.content)}
		</div>
	</div>
</main>