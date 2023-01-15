<script lang="ts">
	import { page } from '$app/stores';
	import ioe from '$lib/images/ioe-logo.webp';
	import uohyd from '$lib/images/uohyd-logo.webp';
	// import { cubicOut } from 'svelte/easing';
	import {logicalPropertiesHorizontalSlide, horizontalSlide} from '$lib/components/slidetransitions'
	import {sublinks} from '$lib/stores/sublinks'
	import {base} from "$app/paths";

	let active = $page.url.pathname;

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

	let displayMenu = false;
	// let sublinks = options[activeIndex].sublinks

</script>

{#if displayMenu}
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
{/if}
<nav class="fixed flex py-4 px-24 w-screen z-[100] bg-matty-900/90 backdrop-blur-lg items-center">
	<span class="flex-1 flex justify-start">
		<button on:click={() => (displayMenu=!displayMenu)} class="material-symbols-rounded">
			{#if displayMenu}
				menu_open
			{:else}
				menu
			{/if}
		</button>
	</span>
	<div class="flex-1 flex items-center gap-3">
		<img src={uohyd} alt="uoh-logo">
		<span class="font-medium">SCIS</span>
		<img src={ioe} alt="ioe-logo">
	</div>
	<a href="#contact" class="hover:underline underline-offset-2 decoration-2 decoration-teal-400">contact</a>

</nav>