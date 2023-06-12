<script>
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import Construction from "$lib/components/Construction.svelte";
    import ToolTip from "$lib/components/ToolTip.svelte";
    const flow = [
        {name: "Home", link: "/"},
        {name: "People", link: "/people"},
    ];
</script>

<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10">
    <Breadcrumb flow={flow} />
    <div class="m-auto max-w-sm font-roboto-flex flex flex-col gap-y-5 lpt:text-xl tbl:text-lg text-base text-matty-900">
        <a class="px-12 py-8 rounded-[1rem] hover:rounded-[2rem] transition-all bg-background-light hover:bg-primary-98 border-[1px] border-outline-light" href="/people/faculty">Faculty</a>
        <a class="px-12 py-8 rounded-[1rem] hover:rounded-[2rem] transition-all bg-background-light hover:bg-primary-98 border-[1px] border-outline-light"  href="/people/students">Students</a>
        <a class="px-12 py-8 rounded-[1rem] hover:rounded-[2rem] transition-all bg-background-light hover:bg-primary-98 border-[1px] border-outline-light"  href="/people/alumni">Alumni</a>
    </div>
</main>