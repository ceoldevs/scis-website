<script>
    import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags 
		title="Admission page" 
		titleTemplate="SCIS | %s" 
		description="scis web Admission Page" 
		canonical="https://localhost:5173/"
		openGraph={{
			url: 'https://localhost:5173/',
			title: 'SCIS Admission Page',
			description: 'SCIS WEB Admission Page',
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
			title: 'SCIS Admission page Twitter Card Title',
			description: 'SCIS Admission Page Twitter Card Description',
			image: 'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z',
			imageAlt: 'Twitter image alt'
		  }}
		/>