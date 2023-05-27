<script>
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  const flow = [
	{name: "Home", link: "/"},
	{name: "News", link: "/news-events"},
  ]

  const news = [
	{
		img: "http://herald.uohyd.ac.in/wp-content/uploads/2023/01/Tejaswi_IMG.jpg",
		title: "S.Tejaswi awarded for the best paper award in International conference on Distributed Computing and Intelligent Technology 2023",
		date: "19 Aug 2022",
		readtime: "1m read",
	},
	{
		img: "http://herald.uohyd.ac.in/wp-content/uploads/2023/01/Tejaswi_IMG.jpg",
		title: "S.Tejaswi awarded for the best paper award in International conference on Distributed Computing and Intelligent Technology 2023",
		date: "19 Aug 2022",
		readtime: "1m read",
	},
	{
		img: "http://herald.uohyd.ac.in/wp-content/uploads/2023/01/Tejaswi_IMG.jpg",
		title: "S.Tejaswi awarded for the best paper award in International conference on Distributed Computing and Intelligent Technology 2023",
		date: "19 Aug 2022",
		readtime: "1m read",
	},
	{
		img: "http://herald.uohyd.ac.in/wp-content/uploads/2023/01/Tejaswi_IMG.jpg",
		title: "S.Tejaswi awarded for the best paper award in International conference on Distributed Computing and Intelligent Technology 2023",
		date: "19 Aug 2022",
		readtime: "1m read",
	},
	{
		img: "http://herald.uohyd.ac.in/wp-content/uploads/2023/01/Tejaswi_IMG.jpg",
		title: "S.Tejaswi awarded for the best paper award in International conference on Distributed Computing and Intelligent Technology 2023",
		date: "19 Aug 2022",
		readtime: "1m read",
	},
  ]

  const headline = news[0];
  const othernews = news.slice(1);

</script>

<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-16">
	<Breadcrumb flow={flow}/>
	<div class="grid grid-cols-5 gap-16">
		<div class="flex col-span-2">
			<div class="bg-matty-900 flex flex-col text-matty-50 rounded-3xl">
				<img class="w-full h-[20rem] object-cover rounded-t-3xl" src={headline.img} alt={headline.title}>
				<div class="px-12 py-8 flex flex-col gap-4">
					<h1 class="text-3xl">
						{headline.title}
					</h1>
					<div class="flex place-items-stretch">
						<div class="flex-1">{headline.date}</div>
						<div>{headline.readtime}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-3 flex flex-col gap-8">
			{#each othernews as item }
			<div class="flex items-start">
				<img class="w-80 object-contain rounded-3xl" src={item.img} alt={item.title}>
				<div class="px-12 py-8 pt-0 flex flex-col gap-4">
					<h1 class="text-2xl">
						{item.title}
					</h1>
					<div class="flex place-items-stretch text-sm">
						<div class="flex-1"> {item.date} </div>
						<div>{item.readtime}</div>
					</div>
				</div>
			</div>
			{/each}
		</div>
	</div>
</main>