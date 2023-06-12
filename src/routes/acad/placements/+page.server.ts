import qs from "qs";

export const prerender = true;

export const load = async ({ fetch }: { fetch: any }) => {
  const query = qs.stringify({
    populate: "*",
  });
  try {
    const res = await fetch(`http://127.0.0.1:1337/api/placement?${query}`);
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
