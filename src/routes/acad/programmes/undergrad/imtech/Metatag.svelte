<script>
    import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags 
		title="I.M.Tech page" 
		titleTemplate="SCIS | %s" 
		description="scis web I.M.Tech Page" 
		canonical="https://localhost:5173/acad/programmes/undergrad/imtech"
		openGraph={{
			url: 'https://localhost:5173/acad/programmes/undergrad/imtech',
			title: 'SCIS I.M.Tech Page',
			description: 'SCIS WEB I.M.Tech Page',
			images: [
			  {
				url: 'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z',
				width: 800,
				height: 600,
				alt: 'Og Image Alt'
			  },
			  {
				url: 'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z',
				width: 900,
				height: 800,
				alt: 'Og Image Alt Second'
			  },
			  { url: 'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z' },
			  { url: 'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z' }
			],
			site_name: 'SCIS'
		  }}
		  twitter={{
			handle: '@handle',
			site: '@site',
			cardType: 'summary_large_image',
			title: 'SCIS I.M.Tech page Twitter Card Title',
			description: 'SCIS I.M.Tech Page Twitter Card Description',
			image: 'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z',
			imageAlt: 'Twitter image alt'
		  }}
		/>