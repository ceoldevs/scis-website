<script>
      /** @type {import('./$types').PageData} */
  export let data;
  import { marked } from 'marked';
</script> 

<main class="prose prose-custom max-w-none mbl:w-full lpt:w-5/6 lpt-lg:w-4/6">
    <h1 class="font-roboto-flex font-medium"> {data.data.attributes.Title} </h1>
    {@html marked(data.data.attributes.Content)}
</main>