<script lang="ts">
	import { marked } from 'marked';
	import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import Metatag from '$lib/components/Metatag.svelte';
	import {env} from '$env/dynamic/public' ;
	export let data: any;

	const flow = [
		{name: "Home", link: "/"},
		{name: "Placements", link: "/acad/placements"},
	]
</script>

<Metatag data={{
	title:"Placements Page",
	description:"SCIS WEB Placements Page",
	link:`${env.PUBLIC_SVELTEURL??'http://localhost:5173'}/acad/placements`,
	img:`${env.PUBLIC_STRAPIURL??'http://localhost:1337'}/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z`,
	imgAlt:'SCIS Site',
	og:{
		title:"SCIS Placements Page",
		description:'SCIS WEB Placements Page'
	},
	twitter:{
		title: 'SCIS Placements page Twitter Card Title',
		description:'SCIS Placements Page Twitter Card Description'
	}
}}/>
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
	<Breadcrumb {flow} />
	<div class="prose prose-matty prose-custom max-w-5xl prose-table:table-auto prose-th:text-clip prose-th:overflow-hidden">
		<h2 class="font-fraunces text-font-medium text-4xl">
			Placements
		</h2>

        {@html marked(data.data.attributes.introText)}
        {#each data.data.attributes.placementList as {year, placementInfo}}
            <h3 class="font-fraunces text-font-medium text-3xl">
                Year {year}
            </h3>
            {@html marked(placementInfo)}
        {/each}
		<h2 class="font-fraunces text-font-medium text-4xl">
			Placement Coordinators
		</h2>
		<div>
            {@html marked(data.data.attributes.placementCoodinators)}
		</div>
	</div>
</main>