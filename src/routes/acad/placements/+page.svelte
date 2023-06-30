<script lang="ts">
	import { marked } from 'marked';
	import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import Metatag from './Metatag.svelte';
	export let data: any;

	const flow = [
		{name: "Home", link: "/"},
		{name: "Placements", link: "/acad/placements"},
	]
</script>

<Metatag />
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