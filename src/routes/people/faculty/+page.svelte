<script lang="ts">
	import { base } from '$app/paths';
	import { marked } from 'marked';
	import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import Metatag from './Metatag.svelte';
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

<Metatag />
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
	<Breadcrumb flow={flow}/>
	<!-- {#await promise}
		...loading...
	{:then json} -->
	<div class="flex flex-col gap-y-10">
		<h1 class="font-sans font-medium text-3xl">Current Faculty</h1>
		{#each data.data as record}
		<div class="flex flex-col justify-center">
			<!-- <img 
				class="w-14 h-14 object-cover rounded-full"
				src={`http://localhost:1337${record.attributes.display_pic.data.attributes.url}`} alt={record.attributes.siteId} /> -->
			<div class="flex gap-3 items-center">
				<div>{record.attributes.name}</div>
				<a class="text-primary-light text-base underline decoration-1" href={`${base}/people/faculty/${record.attributes.siteId}`}>Profile</a> | 
				<a class="text-primary-light text-base underline decoration-1" target="_blank" rel="noreferrer" href={`https://scis.uohyd.ac.in/${record.attributes.siteId}`}>Homepage</a>
			</div>
			<div class="text-sm text-neutralvariant-30 prose">
				{@html marked(record.attributes.education)}
			</div>
			<div class="flex text-base gap-x-2">
				<span class="text-neutralvariant-30">Areas of Interest: </span>
				{#each record.attributes.areaOfInterest as interest, i}
					{#if i == record.attributes.areaOfInterest.length - 1}
						<span>{interest}</span>
					{:else}
						<span>{interest},</span>
					{/if}
				{/each}
			</div>
		</div>
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