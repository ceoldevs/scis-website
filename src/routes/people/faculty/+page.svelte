<script lang="ts">
	import { base } from '$app/paths';
	import { marked } from 'marked';
	import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import Metatag from '$lib/components/Metatag.svelte';
	import {env} from '$env/dynamic/public' ;
	export let data: any;

	const flow = [
		{name: "Home", link: "/"},
		{name: "People", link: "/people"},
		{name: "Faculty", link: "/people/faculty"},
	]

	// async function getFacultyData() {
	// 	try {
	// 		const res = await fetch(`http://localhost:1337/api/faculties?populate=*`);
	// 		const text = await res.json();

	// 		if (res.ok) {
	// 			return text;
	// 		} else {
	// 			throw new Error(text);
	// 		}
	// 	} catch (e) {
	// 		throw e;
	// 	}
	// }
	
	// let promise = getFacultyData();

	// let promise = fetch("http://localhost:1337/api/faculties")

</script>

<Metatag data={{
	title:"Faculty Page",
	description:"SCIS WEB Faculty Page",
	link:`${env.PUBLIC_SVELTEURL||'http://localhost:5173'}/people/faculty`,
	img:`${env.PUBLIC_STRAPIURL||'http://localhost:1337'}/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z`,
	imgAlt:'SCIS Site',
	og:{
		title:"SCIS Faculty Page",
		description:'SCIS WEB Faculty Page'
	},
	twitter:{
		title: 'SCIS Faculty page Twitter Card Title',
		description:'SCIS Faculty Page Twitter Card Description'
	}
}}/>
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
	<Breadcrumb flow={flow}/>
	<!-- {#await promise}
		...loading...
	{:then json} -->
	<div class="flex flex-col gap-y-10">
		<h1 class="font-sans font-medium text-3xl">Current Faculty</h1>
		{#each data.data as record}
		<a href={`${base}/people/faculty/${record.attributes.siteId}`}>
		<div class="flex flex-col justify-center">
			<!-- <img 
				class="w-14 h-14 object-cover rounded-full"
				src={`http://localhost:1337${record.attributes.display_pic.data.attributes.url}`} alt={record.attributes.siteId} /> -->
			<div class="flex sm:gap-3 flex-col sm:flex-row">
				<div class="font-fraunces underline text-3xl">{record.attributes.name}</div>
				<div class="pb-2 sm:pt-1">
					<span class="bg-blue-100 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-xl dark:bg-blue-900 dark:text-blue-300 font-bold">
						{record.attributes.position}
					</span>
				</div>
				<!-- <a class="text-primary-light text-base underline decoration-1" href={`${base}/people/faculty/${record.attributes.siteId}`}>Profile</a> | 
				<a class="text-primary-light text-base underline decoration-1" target="_blank" rel="noreferrer" href={`https://scis.uohyd.ac.in/${record.attributes.siteId}`}>Homepage</a> -->
			</div>
			<!-- <div class="text-sm text-neutralvariant-30">
				{@html marked(record.attributes.education)}
			</div> -->
			<div class="flex text-base gap-x-2 flex-col sm:flex-row">
				<!-- <span class="text-neutralvariant-30">Areas of Interest: </span> -->
			
				{#each record.attributes.areaOfInterest as interest, i}
					{#if i == record.attributes.areaOfInterest.length - 1}
						<span>{interest} |</span>
					{:else}
						<span>{interest},</span>
					{/if}
				{/each}
			
				<span>
					<a href={`mailto:${record.attributes.email}`}>{record.attributes.email}</a>
				</span>
			</div>
			<div class="text-primary-light flex items-center mt-3 sm:mt-1">
				<span class="material-symbols-rounded">
					language
				</span>
				<a class="text-base decoration-1 ml-2 mt-1" target="_blank" rel="noreferrer" href={`https://scis.uohyd.ac.in/${record.attributes.siteId}`}>Visit Home Page</a> 
			</div>
		</div>
		</a>
		{/each}
	</div>
	<!-- {:catch error}
		<div class="flex flex-col w-full items-center gap-y-6">
			<span class="material-symbols-rounded text-5xl text-error-50">error</span>
			<span>
				{#if error.message == "Failed to fetch"}
					Looks like our <span class="text-primary-40">data servers</span> are down &#128531;. Please try later
				{/if}
			</span>
		</div>
	{/await} -->
</main>