<script lang="ts">

    import type {IPageItems} from '$lib/interfaces/pageItems'

    export let data: IPageItems[];
    export let active: string = data[0].name;

</script>

{#each data as item}
    <a href={item.link} class={`px-6 py-2 rounded-full w-full hover:bg-neutralvariant-95 ${(active == item.name) ? "font-medium border-[1px] border-light-outline text-neutral-0" : "text-neutral-30"}`}>
        {item.name}
    </a>
{/each}

