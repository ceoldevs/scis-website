<script lang="ts">
	import { base } from '$app/paths';
	import { marked } from 'marked';
	import Breadcrumb from "$lib/components/Breadcrumb.svelte";

	export let data:any;
    console.log(data);
    const getResearch: any = (rt:any) => Object.values(rt)[0];

	const flow = [
		{name: "Home", link: "/"},
		{name: "People", link: "/people"},
		{name: "Faculty", link: "/people/faculty"},
		{name: data.data.attributes.name, link: `/people/faculty/${data.data.attributes.siteId}`},
	]

	async function getFacultyData() {
		try {
			const res = await fetch(`http://localhost:1337/api/faculties?populate=*`);
			const text = await res.json();

			if (res.ok) {
				return text;
			} else {
				throw new Error(text);
			}
		} catch (e) {
			throw e;
		}
	}
	
	let promise = getFacultyData();

	// let promise = fetch("http://localhost:1337/api/faculties")

</script>

<main class="flex lpt-lg:flex-row flex-col justify-between gap-8 lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
    <div class="flex-2 flex flex-col">
	<Breadcrumb flow={flow}/>
        <div class="flex gap-x-10 flex-col items-center lpt-lg:justify-start">
            <img 
                class="w-48 h-60 object-cover rounded-xl"
                src={`http://localhost:1337${data.data.attributes.display_pic.data.attributes.url}`} alt={data.data.attributes.siteId} 
            />
            <h1 class="my-4 text-4xl">{data.data.attributes.name}</h1>
        </div>
        <div class="text-neutralvariant-30 prose mt-4">
            <b class="not-prose"> Education: </b>
            {@html marked(data.data.attributes.education)}
        </div>
        <div class="text-base mt-4">
                <b>Areas of Interest: </b>
                {#each data.data.attributes.areaOfInterest as interest, i}
                    {#if i == data.data.attributes.areaOfInterest.length - 1}
                        <span>{interest}</span>
                    {:else}
                        <span>{interest},</span>
                    {/if}
                {/each}
        </div>
        <div class="text-sm mt-4">
            <span>Email: <a class="underline text-primary-light decoration-1" href={`mailto:${data.data.attributes.email}`}>{data.data.attributes.email}</a></span> | 
            <span><a class="underline text-primary-light decoration-1" target="_blank" rel="noreferrer" href={`https://scis.uohyd.ac.in/${data.data.attributes.siteId}`}>Personal Website</a></span>
        </div>
        <div class="prose mt-4">
            <h3>Professional Experience and Activities</h3>
            {@html marked(data.data.attributes.otherInformation)}
        </div>
    </div>

    <div class="prose">
        <h3>Researches:</h3>
        <div>
            {#await promise}
                ...loading researches
            {:then researches} 
                <ul>
                {#each researches as research}
                    <li class="">
                        <span>
                        {getResearch(research).title}
                        </span>
                        <a class="text-primary-light underline decoration-1" href={getResearch(research).ee}>Click here to read</a>
                    </li>
                {/each}
                </ul>
			{:catch e}
				<div class="flex flex-col w-full items-center gap-y-6">
					<span class="material-symbols-rounded text-5xl text-error-50">error</span>
					<span>
						Looks like our <span class="text-primary-40">data servers</span> are down &#128531;. Please try later
					</span>
				</div>
            {/await}
        </div>
    </div>
</main>