<script lang="ts">
    import { base } from "$app/paths";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  
  const flow = [
	{name: "Home", link: "/"},
	{name: "News", link: "/news-events"},
  ]

  export let data:any ;
  
  function formatTimestamp(timestamp: string | Date) {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }


</script>

<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-16">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<Breadcrumb flow={flow}/>

	 <div class ="md:flex flex-row">
		<div class="flex flex-col gap-y-5 basis-3/4 mr-8 pr-8 border-r-2">
			{#each data.data as newsItem}
			<div class="flex flex-row">
				<div class="basis-3/4 flex flex-col">
					<div>
						<h1 class="text-3xl font-fraunces">
							{newsItem.attributes.Title}
						</h1>
					</div>
					{#if newsItem.attributes.eventTimeDetails != null}
						<p><i class="fa fa-calendar"/> {newsItem.attributes.eventTimeDetails}</p>

					{/if}
					<div class="font-roboto-flex prose prose-matty mb-2">
						<p class="mb-1" >{newsItem.attributes.Description}</p>
						<h4 class="font-"> by {newsItem.attributes.writer.data.attributes.username},  {formatTimestamp(newsItem.attributes.writer.data.attributes.updatedAt)}</h4>
					</div>
					<a href="/news-events/{newsItem.attributes.Slug}" class="font-medium font-roboto-flex text-sky-300 hover:text-sky-600 underline underline-offset-2">Link to check it out!! &rarr;</a>
				</div>
				<div class="basis-1/4">
					<img class="w-[15rem] h-[15rem] object-cover rounded-t-3xl relative" src={newsItem.attributes.CoverImage} alt={newsItem.attributes.Title}/>
				</div>
			</div> 
			<hr>

			{/each}
		</div>

	
		<div class="basis-1/4">
			<h1 class="text-3xl mb-5">Spotlight</h1>
			{#each data.data as events}
				<div class="mb-7 font-Inter">
				<a href='/news-events/{events.attributes.Slug}' class="text-xl underline underline-offset-2">{events.attributes.Title}</a>
				</div>
			{/each}
		</div> 
	</div>
	
	
</main>