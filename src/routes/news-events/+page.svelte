<script lang="ts">
    import { base } from "$app/paths";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import Metatag from "$lib/components/Metatag.svelte";
	import {env} from "$env/dynamic/public" ;
  
  const flow = [
	{name: "Home", link: "/"},
	{name: "News", link: "/news-events"},
  ]

  export let data:any ;
  
  function formatTimestamp(timestamp: string | Date) {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }

  function toCapitalCase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

</script>

<Metatag data={{
	title:"News Page",
	description:"SCIS WEB News Page",
	link:`${env.PUBLIC_SVELTEURL||'http://localhost:5173'}/news-events`,
	img:`${env.PUBLIC_STRAPIURL||'http://localhost:1337'}/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z`,
	imgAlt:'SCIS Site',
	og:{
		title:"SCIS News Page",
		description:'SCIS WEB News Page'
	},
	twitter:{
		title: 'SCIS News page Twitter Card Title',
		description:'SCIS News Page Twitter Card Description'
	}
}}/>
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-16">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<Breadcrumb flow={flow}/>

	 <div class ="grid grid-cols-8">
		<div class="flex flex-col gap-y-5 lpt:col-span-6 col-span-8 lpt:mr-4 lpt:pr-4 lpt:border-r-2">
			{#each data.data as newsItem}
			<a href="/news-events/{newsItem.attributes.Slug}" class="flex lpt:flex-row flex-col-reverse gap-x-4 group">
				<div class="flex-1 flex flex-col">
					<div>
						<h1 class="text-3xl font-fraunces group-hover:underline">
							{newsItem.attributes.Title}
						</h1>
					</div>
					{#if newsItem.attributes.eventTimeDetails != null}
						<p class="flex items-center gap-x-2 my-2"><span class="material-symbols-rounded">calendar_month</span> {newsItem.attributes.eventTimeDetails}</p>

					{/if}
					<div class="font-roboto-flex prose prose-matty mb-2">
						<p class="mb-1" >{newsItem.attributes.Description ?? ""}</p>
						<p class="font-roboto-flex"> by {toCapitalCase(newsItem.attributes.writer.data.attributes.username)},  {formatTimestamp(newsItem.attributes.writer.data.attributes.updatedAt)}</p>
					</div>
					<div class="flex flex-wrap">
						{#each newsItem.attributes.Actions as action}
							<a href={action.link} class="flex items-center gap-x-2 font-medium font-roboto-flex text-primary-light hover:underline underline-offset-2">
								{action.name}
								<span class=" material-symbols-rounded">{action.icon}</span>
							</a>
						{/each}
						<!-- <a href="/news-events/{newsItem.attributes.Slug}" class="font-medium font-roboto-flex text-primary-light hover:underline underline-offset-2"></a> -->
					</div>
				</div>
				<img class="lpt-lg:w-[20rem] lpt:w-[15rem] max-h-50 object-cover relative" src={`http://localhost:1337${newsItem.attributes.CoverImage.data.attributes.url}`} alt={newsItem.attributes.CoverImage.data.attributes.name}/>
			</a> 
			<hr>

			{/each}
		</div>

		<div class="lpt:col-span-2 col-span-8">
			<h1 class="text-3xl mb-5 font-fraunces">Spotlight</h1>
			<ul class="prose prose-matty prose-custom flex flex-col">
			{#each data.spotlight.data as events}
				<li>
					<a href='/news-events/{events.attributes.Slug}' class="font-roboto-flex text-lg underline underline-offset-2">{events.attributes.Title}</a>
				</li>
			{/each}
			</ul>
			<!-- <div class="mt-16">
				Join our newsletter to get constant 
			</div> -->
		</div> 
	</div>
	
	
</main>