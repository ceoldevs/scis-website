<script lang="ts">
    import type {IData} from '$lib/interfaces/studentList'
    import { marked } from 'marked';
    import Metatag from "$lib/components/Metatag.svelte";
    import {env} from '$env/dynamic/public' ;
    export let data: {data: IData};
</script>

<Metatag data={{
	title:data.data.attributes.batch,
	description:`Batch ${data.data.attributes.batch} Student List`,
	link:`${env.PUBLIC_SVELTEURL||'http://localhost:5173'}${data.data.attributes.Slug}`,
	img:`${env.PUBLIC_STRAPIURL||'http://localhost:1337'}/uploads/backtostudy_c5622fcee0.png`,
	imgAlt:'SCIS Site',
	og:{
		title:data.data.attributes.batch,
		description:`Batch ${data.data.attributes.batch} Student List`
	},
	twitter:{
		title: data.data.attributes.batch,
		description:`Batch ${data.data.attributes.batch} Student List`
	}
}}/>
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10">
    <a href="/people/students" class="flex items-center mb-6 gap-x-2 font-medium text-xl">
        <span class="material-symbols-rounded">arrow_back</span>
        back
    </a>
    <div class="prose prose-custom prose-matty">
        <h2 class="font-fraunces font-medium tbl:text-4xl text-3xl">{data.data.attributes.batch}</h2>
        {#if data.data.attributes.studentList !== undefined }
            {@html marked(data.data.attributes.studentList)}
        {/if}
    </div>
</main>