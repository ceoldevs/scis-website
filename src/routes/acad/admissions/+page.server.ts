import qs from "qs";

export const prerender = true;

export const load = async ({ fetch }: { fetch: any }) => {
  const query = qs.stringify({
	// fields: {
	// 	// mca: ['title', 'description'],
	// 	// mtech: ['title', 'description'],
	// 	// imtech: ['title', 'description'],
	// 	// phd: ['title', 'description'],
	// 	homeContent: true
	// },
    populate: {
		mca: {
			fields: ['title', 'description']
		},
		mtech: {
			fields: ['title', 'description']
		},
		imtech: {
			fields: ['title', 'description']
		},
		phd: {
			fields: ['title', 'description']
		},
	},
  });
  try {
    const res = await fetch(`http://127.0.0.1:1337/api/admission?${query}`);
    const json = await res.json();
    if (res.ok) {
		// console.log(json.data.attributes.mca)
      return json;
    } else {
		// console.log(json)
      throw new Error(json);
    }
  } catch (e) {
    console.log("Error");
    throw e;
  }
};
