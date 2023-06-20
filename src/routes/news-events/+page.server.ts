export const prerender = false;

import qs from "qs";

export const load = async ({ fetch}: { fetch: any }) => {
		const query = qs.stringify({
			sort: [ "createdAt:desc" ],
			populate: "*"
		})
		const query2 = qs.stringify({
			filters: {
				spotlight: {
					$eq: true
				}
			},
			populate: "*",
			sort: "priority"
		})
		try {
			const res = await fetch(`http://127.0.0.1:1337/api/news-events?${query}`);
			const json = await res.json();
			const spotlightRes = await fetch(`http://127.0.0.1:1337/api/news-events?${query2}`);
			const spotlight = await spotlightRes.json();
			if (res.ok) {
				return {...json, spotlight};
			} else {
				throw new Error(json);
			}
		} catch (e) {
      console.log("Error")
			throw e;
		}
};


  
