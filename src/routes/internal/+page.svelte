<script>
	import Construction from '$lib/components/Construction.svelte';
    import Metatag from '$lib/components/Metatag.svelte';
	import {env} from '$env/dynamic/public' ;
</script>

<Metatag data={{
	title:"Internal Site Page",
	description:"SCIS WEB Internal Site Page",
	link:`${env.PUBLIC_SVELTEURL||'http://localhost:5173'}/internal`,
	img:`${env.PUBLIC_STRAPIURL||'http://localhost:1337'}/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z`,
	imgAlt:'SCIS Site',
	og:{
		title:"SCIS Internal Site Page",
		description:'SCIS WEB Internal Site Page'
	},
	twitter:{
		title: 'SCIS Internal Site page Twitter Card Title',
		description:'SCIS Internal Site Page Twitter Card Description'
	}
}}/>
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10">
    <div class="font-roboto-flex lpt:text-xl tbl:text-lg text-base text-matty-900">
        <Construction />
    </div>
</main>