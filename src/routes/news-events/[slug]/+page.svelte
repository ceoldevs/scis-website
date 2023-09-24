<script lang="ts">
  import { marked } from "marked";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import { dataset_dev } from "svelte/internal";
  import EventDetails from "$lib/components/news-events/EventDetails.svelte";
  import Metatag from "$lib/components/Metatag.svelte";
  import {env} from '$env/dynamic/public' ;
  export let data: any;

  const flow = [
    { name: "Home", link: "/" },
    { name: "News", link: "/news-events" },
    { name: data.data.attributes.Title.substring(0,15)+"...", link: `/news-events/${data.data.attributes.Slug}` },
  ];

  function formatTimestamp(timestamp: string | Date) {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
</script>

<Metatag data={{
	title:data.data.attributes.Title,
	description:(data.data.attributes.Description||"SCIS News Feed").slice(0,300),
	link:`${env.PUBLIC_SVELTEURL??'http://localhost:5173'}${data.data.attributes.Slug}`,
	img:`${env.PUBLIC_STRAPIURL??'http://localhost:1337'}${data.data.attributes.CoverImage.data.attributes.formats.thumbnail.url}`,
	imgAlt:'SCIS Site',
	og:{
		title:data.data.attributes.Title,
		description:(data.data.attributes.Description||"SCIS News Feed").slice(0,160)
	},
	twitter:{
		title: data.data.attributes.Title,
		description:(data.data.attributes.Description||"SCIS News Feed").slice(0,160)
	}
}}/>
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-16">
  <Breadcrumb {flow} />

  <div class="md:flex flex-row gap-12">
    <div class="flex flex-col gap-y-5 basis-4/5 ">
      <div class="prose prose-matty prose-custom max-w-5xl">
        <div>
          <h1 class="text-5xl font-medium font-fraunces">
            {data.data.attributes.Title}
          </h1>
          <div class="flex flex-row">
            <div class="basis-2/3">
              <div>by {data.data.attributes.writer.data.attributes.username}</div>
            </div>
            <div class="basis-1/3 text-right">
              <div>{formatTimestamp(data.data.attributes.writer.data.attributes.updatedAt)}</div>
            </div>
          </div>
        </div>
        <div class="mbt-5">
          <img
            class="w-full h-[30rem] object-cover relative"
            src={`${env.PUBLIC_STRAPIURL??'http://localhost:1337'}${data.data.attributes.CoverImage.data.attributes.url}`}
            alt={data.data.attributes.CoverImage.data.attributes.alternativeText}
            
          />
        </div>
        <div>
          <p class="">{@html marked(data.data.attributes.Content) }</p>
        </div>
      </div>
      <div class="font-roboto-flex">
        <div class="my-12 hidden lpt:flex flex-col gap-y-4">
          {#if data.data.attributes.eventTimeDetails != null}
            <EventDetails {data} />
          {/if}
          <div class="flex flex-col w-max">
            {#each data.data.attributes.Actions as action, i}
              {#if i===0}
                <a class="rounded-full text-center bg-primary-light text-on-primary-light px-8 py-4 w-full" href={action.link}>{action.name}</a>
              {:else}
                <a class="rounded-full text-center border-2 border-primary-light bg-background-light text-primary-light px-8 py-4 w-full" href={action.link}>{action.name}</a>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    </div>
    <div class="basis-1/5">
        <div class="lpt:my-0 my-12 flex flex-col gap-y-4">
          {#if data.data.attributes.eventTimeDetails != null}
            <EventDetails {data} />
          {/if}
          <div class="flex flex-col w-max">
            {#each data.data.attributes.Actions as action, i}
              {#if i===0}
                <a class="rounded-full text-center bg-primary-light text-on-primary-light px-8 py-4 w-full" href={action.link}>{action.name}</a>
              {:else}
                <a class="rounded-full text-center border-2 border-primary-light bg-background-light text-primary-light px-8 py-4 w-full" href={action.link}>{action.name}</a>
              {/if}
            {/each}
          </div>
        </div>
    </div>
  </div>
</main>
