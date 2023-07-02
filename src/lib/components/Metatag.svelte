<script>
    import { MetaTags } from 'svelte-meta-tags';
	export let data ;
</script>

<MetaTags 
		title={data.title}
		titleTemplate="SCIS | %s" 
		description={data.description} 
		canonical={data.link}
		openGraph={{
			url: data.og.link ,
			title: data.og.title,
			description: data.og.description,
			images: [
			  {
				url: data.img,
				width: 800,
				height: 600,
				alt: data.imgAlt
			  },
			  {
				url: data.img,
				width: 900,
				height: 800,
				alt: data.imgAlt
			  },
			  { url: data.img },
			  { url: data.img }
			],
			site_name: 'SCIS'
		  }}
		  twitter={{
			handle: '@handle',
			site: '@site',
			cardType: 'summary_large_image',
			title: data.twitter.title,
			description: data.twitter.description,
			image: data.img,
			imageAlt: data.imgAlt
		  }}
		/>