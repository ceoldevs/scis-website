<script>
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Construction from '$lib/components/Construction.svelte';
    import Metatag from './Metatag.svelte';

    const flow = [
        {name: "Home", link: "/"},
        {name: "Contact Us", link: "/contactus"},
    ];
</script>
<Metatag />
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10">
    <Breadcrumb flow={flow} />
    <div class="font-roboto-flex lpt:text-xl tbl:text-lg text-base text-matty-900">
        <Construction />
    </div>
</main>

