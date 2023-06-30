<script lang="ts">
	import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import Metatag from "./Metatag.svelte";

	const flow = [
		{name: "Home", link: "/"},
		{name: "Programmes", link: "/acad/programmes"},
		{name: "Undergrad", link: "/acad/programmes/undergrad"},
	]
</script>

<Metatag />
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
	<Breadcrumb {flow} />
	<div class="prose prose-matty prose-custom max-w-5xl prose-table:table-auto prose-th:text-clip prose-th:overflow-hidden">
		<h2 class="font-fraunces">Undergraduate Courses</h2>
		<div class="flex items-center gap-x-2">
			<a href="/acad/programmes/undergrad/imtech">Integrated M.Tech - 5 year course </a>
			<span class="material-symbols-rounded">arrow_outward</span>
		</div>
	</div>
</main>