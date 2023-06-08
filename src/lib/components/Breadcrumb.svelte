<script lang="ts">
    import type { BreadType } from "$lib/interfaces/breadcrumb";
    // export const flow: BreadType[] = [
    //     {name: "Home", link: "/"},
    //     {name: "About", link: "/about"},
    // ];

    export let flow: Array<BreadType>;

</script>
<main class="mt-4 mb-8 flex gap-2 text-base">
    {#each flow as {name, link}, i}
        {#if i === flow.length - 1}
            <a href={link} class="flex cursor-pointer hover:underline hover:decoration-matty-900 hover:decoration-[1px]">{name}</a>
        {:else}
        <span class="flex items-center gap-2">
            <a href={link} class="text-matty-500 cursor-pointer hover:underline hover:decoration-[1px] hover:decoration-matty-500">{name}</a>
            <svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-sky-700">
                <path d="M0.224681 18.4146C0.108536 18.989 0.547705 19.5259 1.1338 19.5259C1.57499 19.5259 1.95512 19.2151 2.04281 18.7827L5.57934 1.34491C5.69656 0.766935 5.25478 0.226562 4.66504 0.226562C4.22107 0.226562 3.8386 0.539442 3.75062 0.974608L0.224681 18.4146Z"/>
            </svg>
                 
        </span>
        {/if}

    {/each}
</main>