<script lang="ts">
	import Breadcrumb from "$lib/components/Breadcrumb.svelte";

	const flow = [
		{name: "Home", link: "/"},
		{name: "Programmes", link: "/acad/programmes"},
	]
</script>

<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
	<Breadcrumb {flow} />
	<div class="prose prose-matty prose-custom max-w-5xl prose-table:table-auto prose-th:text-clip prose-th:overflow-hidden">
		<div class="flex flex-col">
			<h2 class="font-fraunces">Undergraduate Courses</h2>
			<div class="flex items-center gap-x-2">
				<a href="/acad/programmes/undergrad/imtech">Integrated M.Tech - 5 year course </a>
				<span class="material-symbols-rounded">arrow_outward</span>
			</div>
			<hr class="my-6" />
			<h2 class="font-fraunces">Postgraduate Courses</h2>
			<div class="flex items-center gap-x-2">
				<a href="/acad/programmes/postgrad/mtech">M.Tech - 2 year course </a>
				<span class="material-symbols-rounded">arrow_outward</span>
			</div>
			<div class="flex items-center gap-x-2">
				<a href="/acad/programmes/postgrad/mca">MCA - 2 year course </a>
				<span class="material-symbols-rounded">arrow_outward</span>
			</div>
			<div class="flex items-center gap-x-2">
				<a href="/acad/programmes/postgrad/phd">PhD</a>
				<span class="material-symbols-rounded">arrow_outward</span>
			</div>

		</div>
	</div>
</main>