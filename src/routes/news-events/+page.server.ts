export const prerender = false;

export const load = async ({ fetch}: { fetch: any }) => {
		try {
			const res = await fetch(`http://127.0.0.1:1337/api/news-events?populate=*`);
			const json = await res.json();
			if (res.ok) {
				return json;
			} else {
				throw new Error(json);
			}
		} catch (e) {
      console.log("Error")
			throw e;
		}
};


  
