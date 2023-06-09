<script>
	import viewport from '$lib/components/home/useViewportAction';
	let styleFixed = 'fixed';
	// @ts-ignore
	export let data;
	const first = data.data[0];
	const other = data.data.slice(1,4);
</script>

<div class="pt-10 font-roboto-flex bg-on-primarycont-light relative">
    <div class={`w-[58vw] py-5 bg-on-primarycont-light bottom-0 h-[90vh] flex flex-col text-on-primary-light ${styleFixed}`}>
		<img 
			class="object-cover w-full h-[50vh]"
			src={`http://localhost:1337${first.attributes.CoverImage.data.attributes.url}`}
			alt="Test"
		/>
		<div class="lpt-lg:px-10 lpt:px-6 pt-4 flex flex-col gap-y-4">
			<h1 class="font-fraunces lpt-lg:text-4xl lpt:text-3xl text-2xl">{first.attributes.Title}</h1>
			<div>
				{first.attributes.Content.slice(0,255)}...
			</div>
			<div class="">
				{#each first.attributes.Actions as action}
					<a class="flex items-center gap-x-2 text-primary-90" href={action.link}>{action.name} <span class="material-symbols-rounded">{action.icon}</span></a>
				{/each}
			</div>
		</div>
    </div>
    <div class="w-[42vw] ml-[58vw] bg-primarycont-light flex flex-col">
		<div class="p-8 flex flex-col gap-y-6">
			{#each other as item}
				<img 
					class="object-cover w-full lpt-lg:h-80 lpt:h-56"
					src={`http://localhost:1337${item.attributes.CoverImage.data.attributes.url}`}
					alt="Test"
				/>
				<div class="flex flex-col gap-y-4">
					<h2 class="font-fraunces text-2xl">{item.attributes.Title}</h2>
					<div>
						{item.attributes.Content.slice(0,155)}...
					</div>
					<div>
						{#each item.attributes.Actions as action}
							<a class="flex items-center gap-x-2 text-primary-light" href={action.link}>{action.name} <span class="material-symbols-rounded">{action.icon}</span></a>
						{/each}
					</div>
				</div>
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
<div style="" class="font-roboto-flex bg-background-light"
	use:viewport
	on:enterViewport={() => (styleFixed = 'absolute')}
	on:exitViewport={() => (styleFixed = 'fixed')}
	>
	<div class="lpt-lg:px-24 lpt:px-12 px-4 pt-12 pb-8 w-fit font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r text-sky-700 font-roboto-flex">
		Research Areas
	</div>
	<div class="grid lpt:grid-cols-2 tbl:grid-cols-1 grid-cols-1">
		<div class="card-zoom cursor-pointer">
			<div class="relative bg-cloud lpt:h-[25rem] tbl:h-[22rem] h-[15rem] bg-no-repeat bg-cover card-zoom-image">
			</div>
			<div class="card-zoom-text lpt:text-2xl text-xl font-medium">
				Cloud & IoT</div>
		</div>
		<div class="card-zoom cursor-pointer">
			<div class="relative bg-ai lpt:h-[25rem]  tbl:h-[22rem] h-[15rem] bg-no-repeat bg-cover card-zoom-image">
			</div>
			<div class="card-zoom-text lpt:text-2xl text-xl font-medium">
				Artificial Intelligence
			</div>
		</div>
		<div class="card-zoom cursor-pointer">
			<div class="relative bg-crypto lpt:h-[25rem] tbl:h-[22rem]  h-[15rem] bg-no-repeat bg-cover card-zoom-image">
			</div>
			<div class="card-zoom-text lpt:text-2xl text-xl font-medium">
				Cryptography
			</div>
		</div>
		<div class="card-zoom cursor-pointer">
			<div class="relative bg-roughsets lpt:h-[25rem] tbl:h-[22rem]  h-[15rem] bg-no-repeat bg-cover card-zoom-image">
			</div>
			<div class="card-zoom-text lpt:text-2xl text-xl font-medium">
				Rough Sets
			</div>
		</div>
	</div>
	<div class="flex w-full justify-center py-4">
		<a href="/research" class="font-roboto-flex text-base flex items-center gap-x-2 rounded-full py-6 px-8 bg-primary-90 text-on-primarycont-light">
			Check our other research areas <span class="material-symbols-rounded">arrow_outward</span>
		</a>
	</div>
</div>
<style>
	.cfixed {
		position: fixed;
	}
	.cabsolute {
		position: absolute;
	}
</style>
<!-- <LatestNews /> -->
