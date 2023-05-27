<script lang="ts">
	import Uohyd from '$lib/components/uohyd.svelte';
	import {base} from "$app/paths";
	import AcadExpanded from '$lib/components/AcadExpanded.svelte';

	let showMenu = false;
	let showAcadMobile = false;

	const menu = [
		{
			name: "Home", 
			link: base + "/", 
		},
		{
			name: "News",
			link: base + "/news-events"
		},
		{
			type: "expandable",
			name: "Academics",
			link: base + "/acad",
			sublinks: [
				{name: "All Programmes", link: "/programmes"},
				{name: "I.M.Tech", link: "/programmes/imtech"},
				{name: "M.Tech", link: "/programmes/mtech"},
				{name: "PhD", link: "/programmes/phd"},
				{name: "Admissions", link: "/admissions"},
			],
			// TODO: Write a resonable structure for this nested menu.
		},
		{
			name: "Research",
			link: base + "/research"
		},
		{
			name: "About",
			link: base + "/about"
		},
	]

</script>

<div class="fixed w-full z-[1000]">
	<div class="font-roboto-flex flex w-full justify-between lpt:px-12 tbl:px-6 px-2 py-1 bg-primary-95 underline decoration-1 border-b-[0.5px] border-b-outline-light/20 text-sm">
		<div class="flex gap-x-6">
			<a href="/people/students" class="hidden tbl:flex">Students</a>
			<a href="/people/faculty" class="hidden tbl:flex">Faculty</a>
			<a href="/people/alumni" class="hidden tbl:flex">Alumni</a>
			<a href="/people" class="tbl:hidden flex">People</a>
			<a href="/internal" class="text-primary-light underline decoration-primary-light">Internal Site</a>
		</div>
		<div>
			<a href="/contactus"> Contact </a>
		</div>
	</div>
	<nav class=" bg-background-light font-roboto-flex flex justify-between items-center w-full lpt-lg:px-12 lpt:px-8 tbl:px-6 px-2 py-6 border-b-[0.5px] border-b-outline-light/20">
		<a href="/" class="flex items-center gap-2 font-medium max-w-[300px]">
			<div class="min-w-[32px]">
				<Uohyd />
			</div>
		<!-- <img src={uohyd} alt="uoh-logo" class="w-10"> -->
			<span class="hidden lpt:flex leading-none">School of Computer and Information Sciences</span>
			<span class="flex lpt:hidden">SCIS</span>
		</a>
		<div>
			<div class="gap-4 hidden sm:flex items-center">
				{#each menu as {link, name, type} }
					{#if type === "expandable"}
						<AcadExpanded root={link} />
					{:else}
						<a href={link}>{name}</a>
					{/if}
				{/each}
			</div>
			<button class="material-symbols-rounded flex sm:hidden" on:click={() => (showMenu = !showMenu) }>
				{#if showMenu}
					close
				{:else}
					menu
				{/if}
			</button>
		</div>
	</nav>

	{#if showMenu}
		<div class="sm:hidden relative flex w-full min-h-screen bg-background-light justify-center"> 
			<div class="flex flex-col text-5xl gap-y-8 mt-20">
				{#each menu as item }
					{#if item.type == "expandable"}
						<div>
							<button class="" on:click={() => (showAcadMobile = !showAcadMobile)}>
								{item.name}
								<span class="material-symbols-rounded">
									{#if showAcadMobile }
										expand_less
									{:else}
										expand_more
									{/if}
								</span>
							</button>
							<div class={((showAcadMobile) ? "flex" : "hidden") + " transition-all flex-col gap-y-4 mt-4 pl-8 text-2xl"}>
								{#each item.sublinks as sublink}
									<a href={sublink.link}>{sublink.name}</a>
								{/each}
							</div>
						</div>
					{:else}
						<a on:click={() => (showMenu = false)} href={item.link}>{item.name}</a>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</div>