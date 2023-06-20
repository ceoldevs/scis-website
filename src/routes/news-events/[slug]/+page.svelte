<script lang="ts">
  import { marked } from "marked";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import { dataset_dev } from "svelte/internal";

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

<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-16">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <Breadcrumb {flow} />

  <div class="md:flex flex-row">
    <div class="flex flex-col gap-y-5 basis-4/5 mr-8 pr-8 border-r-2">
      <div>
        <h1 class="text-3xl font-fraunces">
          {data.data.attributes.Title}
        </h1>
        <div class="flex flex-row">
          <div class="basis-2/3">
            <h4>by {data.data.attributes.writer.data.attributes.username}</h4>
          </div>
          <div class="basis-1/3 text-right">
            <h4>{formatTimestamp(data.data.attributes.writer.data.attributes.updatedAt)}</h4>
          </div>
        </div>
      </div>
      <div class="mbt-5">
        <img
          class="w-full h-[20rem] object-cover rounded-t-3xl relative"
           src={`http://localhost:1337${data.data.attributes.CoverImage.data.attributes.url}`}
          alt={data.data.attributes.CoverImage.data.attributes.alternativeText}
          
        />
      </div>
      <div class="font-roboto-flex">
        <p class="mb-10">{data.data.attributes.Content}</p>
        <h2 class="text-2xl">
          {#if data.data.attributes.eventTimeDetails != null}
          <p><i class="fa fa-calendar"/> {data.data.attributes.eventTimeDetails}</p>
          <p><i class="fa fa-map-marker"/> {data.data.attributes.venue}</p>
  
        {/if}
        </h2>
      </div>
    </div>
    <div class="basis-1/5">
      <h2 class="text-2xl">
        {#if data.data.attributes.eventTimeDetails != null}
        <p><i class="fa fa-calendar"/> {data.data.attributes.eventTimeDetails}</p>
        <p class="mb-10"><i class="fa fa-map-marker"/> {data.data.attributes.venue}</p>

      {/if}
      NewsLetter</h2>
    </div>
  </div>
</main>
