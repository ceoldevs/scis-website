<script lang="ts">
  import { page } from "$app/stores";
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import PageItems from "$lib/components/PageItems.svelte";
    import type {IPageItems} from '$lib/interfaces/pageItems'
	import { marked } from "marked";
    import Metatag from "./Metatag.svelte";

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
    const flow = [
        {name: "Home", link: "/"},
        {name: "Research", link: "/research"},
		pageItems[1]
    ];

	export let data: any;
</script>

<Metatag />
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10">
    <Breadcrumb flow={flow} />
    <div class="grid grid-cols-12 gap-x-4">
        <div class="prose flex flex-col lpt-lg:col-span-2 lpt:col-span-3 col-span-12">
            <h2 class="font-roboto-flex font-medium">Contents</h2>
            <div class="not-prose flex flex-col w-fit">
            <PageItems data={pageItems} active={pageItems[1].name} />
            </div>
        </div>
        <div class="prose lpt-lg:col-span-10 lpt:col-span-9 col-span-12 lpt:mt-0 mt-6 font-roboto-flex lpt:text-xl tbl:text-lg text-base text-matty-900">
			{@html marked(data.data.attributes.projects)}
        </div>
    </div>

</main>