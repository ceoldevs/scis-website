<script lang="ts">
	import { base } from '$app/paths';
  import { marked } from 'marked';
	import { onMount } from 'svelte';
  	import { afterUpdate } from 'svelte';
    import Metatag from './Metatag.svelte';
	export let data: any;

// 	let markdownContent = '';

// 	onMount(async () => {
//     const response = await fetch('admissions/Fees/feeStructure.md');
//     if (response.ok) {
//       markdownContent = await response.text();
//     } else {
//       console.error('Error fetching Markdown file:', response.status);
//     }
//   });

let courses = [
	{name: 'phd', link: '/acad/programmes/postgrad/phd'},
	{name: 'imtech', link: '/acad/programmes/undergrad/imtech'},
	{name: 'mtech', link: '/acad/programmes/postgrad/mtech'},
	{name: 'mca', link: '/acad/programmes/postgrad/mca'},
]

</script>

<Metatag />
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
	<div class="prose prose-matty prose-custom max-w-3xl prose-table:table-auto prose-th:text-clip prose-th:overflow-hidden">
		<h2 class="font-fraunces font-medium">
			Admissions
		</h2>
		<div class="flex flex-col gap-y-4">
			{#each courses as course}
				<div class="flex flex-col gap-y-2">
					<a href={course.link} class="text-3xl">{data.data.attributes[course.name].title}</a>
					<div>{data.data.attributes[course.name].description}</div>
				</div>
			{/each}
		</div>
		<div class="prose-h2:font-fraunces">
			{@html marked(data.data.attributes.homeContent)}
		</div>
	</div>
</main>
