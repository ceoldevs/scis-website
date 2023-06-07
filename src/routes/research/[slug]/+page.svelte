<script lang="ts">
    import type { IData } from '$lib/interfaces/research'
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    export let data: {data: IData[], topic: string, slug: string};
    const flow = [
        {name: "Home", link: "/"},
        {name: "Research", link: "/research"},
        {name: data.topic, link: `/research/${data.slug}`},
    ];
</script>

<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10">
    <Breadcrumb flow={flow} />
    <div class="prose prose-custom prose-matty flex flex-col">
        {#each data.data as paper}
        <div>
            <h2 class="font-fraunces">
                {paper.attributes.title}
            </h2>
            <div>
                by 
                {#each paper.attributes.authors as author, i}
                    {#if i == 0}
                        <a href={author.link}>{author.name}</a>
                    {:else}
                        , <a href={author.link}>{author.name}</a>
                    {/if}
                {/each}
                published in <strong>{paper.attributes.publisher}</strong>
            </div>
        </div>
        {/each}
        <blockquote class="bg-primarycont-light border-primary-40 text-on-primarycont-light rounded-r-full w-fit pr-8">
            Not all research papers added yet, the content mods are working on it. So if you see less or no papers, they will soon be uploaded
        </blockquote>
    </div>
    
</main>