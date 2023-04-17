<script lang="ts">
	import { page } from '$app/stores';
	import Uohyd from '$lib/components/uohyd.svelte';
	// import {logicalPropertiesHorizontalSlide, horizontalSlide} from '$lib/components/slidetransitions'
	// import {sublinks} from '$lib/stores/sublinks'
	import {base} from "$app/paths";
	import AcadExpanded from '$lib/components/AcadExpanded.svelte';

	let active = $page.url.pathname;
	let showMenu = false;

	const activePage = (optionPath: string, pathname: string) => {
		const pattern = new RegExp('^' + optionPath) 
		if (optionPath == base && optionPath !== active ) {
			return ""
		}
		return (pattern.test(active)) ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-400" : ""
	}
	const options =  [
		{
			name: "Home", 
			link: base + "/", 
			sublinks: []
		},
		{
			name: "Academics",
			link: base + "/academics",
			sublinks: [
				{name: "Admissions", link: base + "/academics/admission"},
				{name: "Programmes", link: base + "/academics/programmes"},
				{name: "Programmes", link: base + "/academics/syllabus"},
			]
		},
		{
			name: "People",
			link: base + "/people",
			sublinks: [
				{name: "Faculty", link: base + "/people/faculty"},
				{name: "Visitors", link: base + "/people/visitors"},
				{name: "Students", link: base + "/people/students"},
				{name: "Staff", link: base + "/people/staff"},
				{name: "Alumni", link: base + "/people/alumni"},
			]
		},
		{
			name: "Research",
			link: base + "/research",
			sublinks: [
				{name: "Research Areas", link: base + "/research/research-areas"},
				{name: "Funded Projects", link: base + "/research/funded-projects"},
				{name: "Publications", link: base + "/research/publications"},
				{name: "Linkages", link: base + "/research/linkages"},
			]	
		},
		{
			name: "News",
			link: base + "/news-events",
			sublinks: [],
		},
		{
			name: "Events",
			link: base + "/events",
			sublinks: [],
		},
	]


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
		<div class="flex items-center gap-2 font-medium max-w-[300px]">
			<div class="min-w-[32px]">
				<Uohyd />
			</div>
		<!-- <img src={uohyd} alt="uoh-logo" class="w-10"> -->
			<span class="hidden lpt:flex leading-none">School of Computer and Information Sciences</span>
			<span class="flex lpt:hidden">SCIS</span>
		</div>
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
			<!-- <div class="gap-4 hidden sm:flex items-center">
				<a href="/" class="text-primary-light">Home</a>
				<a href="/news-events">News</a>
				<div class="cursor-pointer group">
					<div class="flex items-center">
					Academics
					<span class="material-symbols-rounded">
						keyboard_arrow_down
					</span>
					</div>
					<div class="z-[10000] fixed w-screen top-34 pt-7 left-0 group-hover:block hidden">
					</div>
				</div>
				<a href="/research">Research</a>
				<a href="/careers-placements">Placements</a>
				<a href="/about">About</a>
			</div> -->
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
		<div class="sm:hidden relative flex w-full min-h-screen bg-background-light"> Hello </div>
	{/if}
</div>