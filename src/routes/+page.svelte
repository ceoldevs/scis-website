<script>
	import { base } from '$app/paths';
	import LatestNews from '$lib/components/home/LatestNews.svelte';
</script>

<div class="lpt:px-14 px-4 min-h-[70vh] lpt:bg-scis-building bg-matty-50 bg-no-repeat bg-cover flex flex-col gap-y-12 justify-center items-center">
	<h1 class="text-matty-800 font-roboto-flex lpt:text-6xl tbl:text-5xl text-4xl font-medium max-w-[60rem] text-center">Shaping future with Artificial Intelligence, Cloud computing and Internet of things</h1>
	<div class="font-medium flex items-center lpt:flex-row tbl:flex-col flex-col gap-y-3">
		<button class="tbl:text-base mbl-lg:text-sm rounded-full bg-sky-700 text-matty-50 tbl:py-4 tbl:px-8 px-5 py-3 hover:bg-transparent hover:text-sky-700 border-2 border-transparent hover:border-sky-700  transition-all duration-200">
			check the courses provided
		</button>
		<button class="tbl:text-base mbl-lg:text-sm text-matty-900 tbl:py-4 tbl:px-8 px-5 py-3  hover:underline underline-offset-2 decoration-2 decoration-sky-700">
			catch up with latest news
		</button>
	</div>
</div>
<!-- <div class="grid grid-cols-2">
	<div class="card-zoom">
		<div class="relative bg-discussion h-[28rem] bg-no-repeat bg-cover card-zoom-image">
		</div>
		<div class="card-zoom-text text-3xl font-medium">Collaborate</div>
	</div>
	<div class="card-zoom">
		<div class="relative bg-achieve h-[28rem] bg-no-repeat bg-cover card-zoom-image">
		</div>
		<div class="card-zoom-text text-3xl font-medium">Achieve</div>
	</div>
</div> -->
<LatestNews />

<div class="lpt-lg:px-24 lpt:px-12 px-4 pt-12 pb-8 w-fit font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r text-sky-700">Research Areas</div>
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
<button class="flex w-full bg-sky-700 text-matty-50 justify-center py-4 font-medium hover:bg-matty-50 hover:text-sky-700 border-2 border-transparent hover:border-sky-700 transition-all">
	<a href="/research">
		Check out Research Projects
	</a>
</button>