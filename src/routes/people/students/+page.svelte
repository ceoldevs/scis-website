<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Construction from '$lib/components/Construction.svelte';

    import type {IStudentList} from '$lib/interfaces/studentList';
    import Metatag from './Metatag.svelte';

    const flow = [
        {name: "Home", link: "/"},
        {name: "People", link: "/people"},
        {name: "Students", link: "/people/students"},
    ];
    export let data: IStudentList;
</script>

<Metatag />
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10">
    <Breadcrumb flow={flow} />
    <div class="font-roboto-flex grid lpt:grid-cols-3 tbl:grid-cols-2 gap-x-5 lpt:gap-x-24 lpt:text-xl tbl:text-lg text-base text-matty-900">
        <div class="flex-1">
            <h2 class="font-fraunces lpt:text-5xl text-4xl my-4">I. M.tech</h2>
            <div class="flex flex-col gap-y-2">
                {#each data.imtech.data as record}
                <div class="flex items-center gap-x-2 ">
                    <a class="underline decoration-primary-light decoration-1 underline-offset-4 hover:decoration-2" href={`/people/students/${record.attributes.Slug}`}>{record.attributes.batch}</a><span class="material-symbols-rounded">arrow_outward</span>
                </div>
                {/each}
            </div>
        </div>
        <div class="flex-1">
            <h2 class="font-fraunces lpt:text-5xl text-4xl my-4">M. Tech</h2>
            <div class="flex flex-col gap-y-2">
                {#each data.mtech.data as record}
                <div class="flex items-center gap-x-2 ">
                    <a class="underline decoration-primary-light decoration-1 underline-offset-4 hover:decoration-2" href={`/people/students/${record.attributes.Slug}`}>{record.attributes.batch}</a><span class="material-symbols-rounded">arrow_outward</span>
                </div>
                {/each}
            </div>
        </div>
        <div class="flex-1">
            <h2 class="font-fraunces lpt:text-5xl text-4xl my-4">MCA</h2>
            <div class="flex flex-col gap-y-2">
                {#each data.mca.data as record}
                <div class="flex items-center gap-x-2 ">
                    <a class="underline decoration-primary-light decoration-1 underline-offset-4 hover:decoration-2" href={`/people/students/${record.attributes.Slug}`}>{record.attributes.batch}</a><span class="material-symbols-rounded">arrow_outward</span>
                </div>
                {/each}
            </div>
        </div>
        <!-- <Construction /> -->
    </div>
</main>
