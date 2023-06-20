<script>
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Construction from '$lib/components/Construction.svelte';

    const flow = [
        {name: "Home", link: "/"},
        {name: "People", link: "/people"},
        {name: "Alumni", link: "/people/alumni"},
    ];
</script>

<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10">
    <Breadcrumb flow={flow} />
    <div class="font-roboto-flex lpt:text-xl tbl:text-lg text-base text-matty-900">
        <Construction />
    </div>
</main>
