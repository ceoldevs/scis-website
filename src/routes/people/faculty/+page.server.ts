import qs from 'qs';
export const prerender = true;

export const load = async ({ fetch}: { fetch: any }) => {
	const query = qs.stringify({
		populate:'*'
	})
		try {
			const res = await fetch(`http://127.0.0.1:1337/api/faculties?${query}`);
			const json = await res.json();

			if (res.ok) {
				return json;
			} else {
        console.log("Error")
				throw new Error(json);
			}
		} catch (e) {
      console.log("Error")
			throw e;
		}
};
