<script lang="ts">
	import { page } from '$app/stores';
	import Uohyd from '$lib/components/uohyd.svelte';
	// import {logicalPropertiesHorizontalSlide, horizontalSlide} from '$lib/components/slidetransitions'
	// import {sublinks} from '$lib/stores/sublinks'
	import {base} from "$app/paths";

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
			link: base + "/news",
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
			expandedinfo: {
			}

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

	// let sublinks = options[activeIndex].sublinks

</script>

<!-- {#if displayMenu}
<div transition:logicalPropertiesHorizontalSlide={{direction: 'inline', duration: 500}} 
	class="z-[10] fixed pt-28 w-screen h-screen flex bg-matty-900/90 backdrop-blur-lg px-24 overflow-hidden"
	>
	<div class="flex-1 flex flex-col gap-y-8">
		{#each options as option, i }
			<button 
				class={ `w-min text-5xl flex font-semibold ${activePage(option.link, active)}` }
				on:click={() => {
					active = option.link
					sublinks.set(option.sublinks)
				}}
			>
				{#if option.sublinks?.length != 0}
						<span>{option.name}</span>
				{:else}
						<a href={option.link}>{option.name}</a>
				{/if}
			</button>
		{/each}
	</div>
	<div class="flex-1 flex flex-col gap-y-12">
		{#if $sublinks.length != 0}
			{#each $sublinks as sublink }
				<a on:click={() => (displayMenu = false)} class={`${(sublink.link === $page.url.pathname) && "font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-400"} w-fit text-xl`} href={sublink.link}>{sublink.name}</a>
			{/each}
		{/if}
	</div>
</div>
{/if} -->
<!-- <nav class="fixed border-b-2 border-matty-300/10 grid grid-cols-3 py-4 lpt-lg:px-24 lpt:px-14 px-4 w-screen z-[100] items-center bg-matty-50/70 backdrop-blur-md justify-items-end">
	<span class="mbl-lg:flex justify-start tbl:hidden">
		<button on:click={() => (displayMenu=!displayMenu)} class="material-symbols-rounded">
			{#if displayMenu}
				menu_open
			{:else}
				menu
			{/if}
		</button>
	</span>
	<div class="flex">
		<a href={`${base}/`} class="flex items-center gap-3">
			<img src={uohyd} alt="uoh-logo" >
			<span class="font-medium max-w-1/2">School of Computer and Information Sciences</span>
		</a>
	</div>
	<a href="#contact" class="flex w-full justify-end hover:underline underline-offset-2 decoration-2 decoration-sky-700">contact</a>

</nav> -->

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
						<div class="grid grid-cols-7 justify-items-center gap-x-6 w-full lpt-lg:px-12 lpt:px-8 tbl:px-6 px-2 py-6 bg-background-light border-[0.5px] border-outline-light/20">
							<div class="flex flex-col gap-y-4 col-span-4">
								<h3> Programmes </h3>
								<div class="flex flex-col gap-y-1">
									<a href="/programmes/undergrad" class="text-primary-light text-xl">Undergraduate Programs</a>
									<span class="text-neutralvariant-40">
										Join us after 12th in our Integrated Masters of Technology through JoSSA. 
										<a 
											href="programmes/undergrad/imtech" 
											class="text-primary-light underline decoration-primary-light decoration-1"
										>
											Check out more about this course
										</a>
									</span>
								</div>
								<div class="flex flex-col gap-y-1">
									<a href="/programmes/postgrad" class="text-primary-light text-xl">Postgradate Programs</a>
									<span class="text-neutralvariant-40">
										Finished your GATE? join us with 
										<a 
											href="/programmes/postgrad/mtech" 
											class="text-primary-light underline decoration-primary-light decoration-1"
										>
											Masters
										</a> 
										and 
										<a 
											href="/programmes/postgrad/phd" 
											class="text-primary-light underline decoration-primary-light decoration-1"
										>
											Doctoral
										</a> 
										programs in Artificial Intelligence, Computer Science and Information Technologies in Banking.
									</span>
								</div>
							</div>
							<div class="flex flex-col col-span-3">
								<div class="flex flex-col">
									<a href="/admissions" class="text-primary-light text-lg">
										Admissions
									</a>
									<span class="text-neutralvariant-40">
										Want to join UoH as a Computer Scientist? Learn more about our admission process
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a href="/research">Research</a>
				<a href="/careers-placements">Placements</a>
				<a href="/about">About</a>
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
		<div class="sm:hidden relative flex w-full min-h-screen bg-background-light"> Hello </div>
	{/if}
</div>