<script lang="ts">
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import PageItems from "$lib/components/PageItems.svelte";
    import type {IPageItems} from '$lib/interfaces/pageItems'

	export let data: any;
    const flow = [
        {name: "Home", link: "/"},
        {name: "Research", link: "/research"},
    ];
    data.data = data.data.sort((a:any, b:any) => (
        a.research_papers.count > b.research_papers.count ? -1 : 1
    ))

    const pageItems: IPageItems[] = [
        {
            name: "Research Areas",
            link: "/research/"
        },
        {
            name: "Funded Projects",
            link: "/research/funded-projects"
        },
        {
            name: "New Equipment",
            link: "/research/equipments"
        },
        {
            name: "Linkages",
            link: "/research/linkages"
        },
    ]

</script>

<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10">
    <Breadcrumb flow={flow} />
    <div class="grid grid-cols-12 gap-x-4">
        <div class="prose flex flex-col lpt-lg:col-span-2 lpt:col-span-3 col-span-12">
            <h2 class="font-roboto-flex font-medium">Contents</h2>
            <div class="not-prose flex flex-col w-fit">
            <PageItems data={pageItems} active={pageItems[0].name} />
            </div>
        </div>
        <div class="lpt-lg:col-span-10 lpt:col-span-9 col-span-12 lpt:mt-0 mt-6 font-roboto-flex lpt:text-xl tbl:text-lg text-base text-matty-900">
            <div class="grid lpt-lg:grid-cols-2 gap-y-8 gap-x-8">
            {#each data.data as researchArea}
                <a href={`/research/${researchArea.Slug}`} class="flex items-center gap-x-2 not-prose 
                            lpt:rounded-[1.4rem] lpt:bg-primary-95 lpt:hover:bg-primarycont-light 
                            transition-all duration-300 lpt:py-6 lpt:px-8 lpt:text-on-primarycont-light 
                            ">
                    <span class="lpt:decoration-transparent text-neutral-0 underline underline-offset-2 decoration-2 decoration-primary-40 tbl:hover:text-primary-40">
                        {researchArea.name}
                    </span>
                    <span class="material-symbols-rounded tbl:no-underline tbl:decoration-transparent">arrow_outward</span>
                </a>
            {/each}
            </div>
        </div>
    </div>

</main>