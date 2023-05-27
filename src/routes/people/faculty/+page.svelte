<script>
	import { base } from '$app/paths';
	import LatestNews from '$lib/components/home/LatestNews.svelte';
	import { marked } from 'marked';

	import Breadcrumb from "$lib/components/Breadcrumb.svelte";
	const flow = [
		{name: "Home", link: "/"},
		{name: "People", link: "/people"},
		{name: "Faculty", link: "/faculty"},
	]

	async function getFacultyData() {
		const res = await fetch(`http://localhost:1337/api/faculties?populate=*`);
		const text = await res.json();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}
	
	let promise = getFacultyData();

	// let promise = await fetch("http://localhost:1337/api/faculties")

</script>

<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
	{#await promise}
		...loading...
	{:then json} 
	<Breadcrumb flow={flow}/>
	<div class="flex flex-col gap-y-10">
		<h1 class="font-sans font-medium text-3xl">Current Faculty</h1>
		{#each json.data as record}
		<div class="flex flex-col justify-center">
			<!-- <img 
				class="w-14 h-14 object-cover rounded-full"
				src={`http://localhost:1337${record.attributes.display_pic.data.attributes.url}`} alt={record.attributes.siteId} /> -->
			<div class="flex gap-3 items-center">
				<div>{record.attributes.name}</div>
				<a class="text-primary-light text-base underline decoration-1" href={`${base}/people/faculty/profile/${record.attributes.siteId}`}>Profile</a> | 
				<a class="text-primary-light text-base underline decoration-1" href={`/${record.attributes.siteId}`}>Homepage</a>
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
		
	{/await}
</main>