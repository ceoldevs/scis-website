<script lang="ts">
	import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import Metatag from "$lib/components/Metatag.svelte";

	const flow = [
		{name: "Home", link: "/"},
		{name: "Programmes", link: "/acad/programmes"},
		{name: "Undergrad", link: "/acad/programmes/undergrad"},
	]
</script>

<Metatag data={{
	title:"Undergraduate Page",
	description:"SCIS WEB Undergraduate Page",
	link:'http://localhost:5173/acad/programmes/undergrad',
	img:'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z',
	imgAlt:'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z',
	og:{
		link:'http://localhost:5173/acad/programmes/undergrad',
		title:"SCIS Undergraduate Page",
		description:'SCIS WEB Undergraduate Page'
	},
	twitter:{
		title: 'SCIS Undergraduate page Twitter Card Title',
		description:'SCIS Undergraduate Page Twitter Card Description'
	}
}}/>
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