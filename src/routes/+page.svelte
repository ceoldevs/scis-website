<script>
	import LatestNews from '$lib/components/home/LatestNews.svelte';
	import viewport from '$lib/components/home/useViewportAction';
    import Metatag from './Metatag.svelte';
	let styleFixed = 'lpt:fixed';
	// @ts-ignore
	export let data;
	const first = data.data[0];
	const other = data.data.slice(1,4);
</script>

<LatestNews first={first} other={other} styleFixed={styleFixed} />

<!--TODO: get the research areas based on the research paper count-->
<div style="" class="font-roboto-flex bg-background-light"
	use:viewport
	on:enterViewport={() => (styleFixed = 'lpt:absolute')}
	on:exitViewport={() => (styleFixed = 'lpt:fixed')}
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
<Metatag />
<!--TODO: Testimonials Section-->