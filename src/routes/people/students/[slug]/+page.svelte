<script lang="ts">
    import type {IData} from '$lib/interfaces/studentList'
    import { marked } from 'marked';
    export let data: {data: IData};
</script>
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