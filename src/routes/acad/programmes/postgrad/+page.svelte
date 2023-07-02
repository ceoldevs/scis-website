<script lang="ts">
	import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import Metatag from "$lib/components/Metatag.svelte";

	const flow = [
		{name: "Home", link: "/"},
		{name: "Programmes", link: "/acad/programmes"},
		{name: "Postgrad", link: "/acad/programmes/postgrad"},
	]
</script>

<Metatag data={{
	title:"Postgraduate Page",
	description:"SCIS WEB Postgraduat Page",
	link:'http://localhost:5173/acad/programmes/postgrad',
	img:'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z',
	imgAlt:'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z',
	og:{
		link:'http://localhost:5173/acad/programmes/postgrad',
		title:"SCIS Postgraduat Page",
		description:'SCIS WEB Postgraduat Page'
	},
	twitter:{
		title: 'SCIS Postgraduat page Twitter Card Title',
		description:'SCIS Postgraduat Page Twitter Card Description'
	}
}}/>
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
	<Breadcrumb {flow} />
	<div class="prose prose-matty prose-custom max-w-5xl prose-table:table-auto prose-th:text-clip prose-th:overflow-hidden">
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
</main>