<script lang="ts">
	import { base } from '$app/paths';
	export let first:any;
	export let other:any;
	export let styleFixed: string;
</script>
<div class="pt-10 font-roboto-flex bg-on-primarycont-light relative flex flex-col lpt:flex-row">
    <div class={`tbl:relative w-full lpt:w-[50vw] lpt-lg:w-[58vw] lpt:py-5 pb-5 bg-on-primarycont-light lpt:bottom-0 lpt:h-[90vh] flex flex-col text-on-primary-light ${styleFixed}`}>
		<a href={`/news-events/${first.attributes.Slug}`} >
		<img 
			class="object-cover w-full lpt:h-[50vh] h-64"
			src={`http://localhost:1337${first.attributes.CoverImage.data.attributes.url}`}
			alt="Test"
		/>
		<div class="lpt-lg:px-10 lpt:px-6 tbl:px-6 px-2 pt-4 flex flex-col gap-y-4">
			<h1 class="font-fraunces lpt-lg:text-4xl lpt:text-3xl text-3xl">{first.attributes.Title}</h1>
			<div>
				{first.attributes.Description.slice(0,255)}...
			</div>
			<div class="">
				{#each first.attributes.Actions as action}
					<a class="flex items-center gap-x-2 text-primary-90" href={action.link}>{action.name} <span class="material-symbols-rounded">{action.icon}</span></a>
				{/each}
			</div>
		</div>
	</a>
    </div>
    <div class="w-full ml-0 lpt:w-[50vw] lpt:ml-[50vw] lpt-lg:w-[42vw] lpt-lg:ml-[58vw] bg-primarycont-light flex flex-col">
		<div class="py-8 lpt-lg:px-10 tbl:px-6 px-2 flex flex-col gap-y-6">
			{#each other as item}
			<a href={`/news-events/${item.attributes.Slug}`} >

				<img 
					class="object-cover w-full lpt-lg:h-80 lpt:h-56"
					src={`http://localhost:1337${item.attributes.CoverImage.data.attributes.url}`}
					alt="Test"
				/>
				<div class="flex flex-col gap-y-4">
					<h2 class="font-fraunces text-2xl">{item.attributes.Title}</h2>
					<div>
						{item.attributes.Description.slice(0,155)}...
					</div>
					<div>
						{#each item.attributes.Actions as action}
							<a class="flex items-center gap-x-2 text-primary-light" href={action.link}>{action.name} <span class="material-symbols-rounded">{action.icon}</span></a>
						{/each}
					</div>
				</div>
				</a>
			{/each}
		</div>
		<div class="p-4 z-[100] bg-primary-20 flex items-center justify-between">
			<div class="text-on-primary-light">
				Want to know more?
			</div>
			<a href="/news-events" class="text-primary-80 flex items-center gap-x-2">Open News <span class="material-symbols-rounded">arrow_outward</span></a>

		</div>
    </div>
</div>