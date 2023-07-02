<script>
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Construction from '$lib/components/Construction.svelte';
    import Metatag from '$lib/components/Metatag.svelte';

    const flow = [
        {name: "Home", link: "/"},
        {name: "Contact Us", link: "/contactus"},
    ];
</script>

<Metatag data={{
	title:"Contact Page",
	description:"SCIS WEB Contact Page",
	link:'http://localhost:5173/contactus',
	img:'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z',
	imgAlt:'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z',
	og:{
		link:'http://localhost:5173/contactus',
		title:"SCIS Contact Page",
		description:'SCIS WEB Contact Page'
	},
	twitter:{
		title: 'SCIS Contact page Twitter Card Title',
		description:'SCIS Contact Page Twitter Card Description'
	}
}}/>

<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10">
    <Breadcrumb flow={flow} />
    <div class="font-roboto-flex lpt:text-xl tbl:text-lg text-base text-matty-900">
        <Construction />
    </div>
</main>

