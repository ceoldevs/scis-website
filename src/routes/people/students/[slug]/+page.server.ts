export const prerender = true;

import qs from 'qs';

function queryOut(contains:string) {
    return }

export const load = async ({ fetch, params }: { fetch: any, params: any }) => {
  const query = qs.stringify({
    filters: {
      Slug: {
        $eq: params.slug,
      },
    },
  });

  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/students?${query}`
    );
    const out = await res.json();
    if (res.ok) {
      return {
        ...out,
        data: out.data[0]
      };
    } else {
      console.log("Error");
      throw new Error({ imtech, mtech, mca });
    }
  } catch (e) {
    console.log("Error");
    throw e;
  }
};
