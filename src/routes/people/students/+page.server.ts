export const prerender = true;

import qs from 'qs';

function queryOut(contains:string) {
    return qs.stringify({
    fields: ['batch', 'Slug'],
    filters: {
        batch: {
            $containsi: contains
        }
    },
  });

    
}

export const load = async ({ fetch }: { fetch: any }) => {
  try {
    const imtechRes = await fetch(`http://127.0.0.1:1337/api/students?${queryOut("I M.tech")}`);
    const imtech = await imtechRes.json();

    const mtechRes = await fetch(`http://127.0.0.1:1337/api/students?${queryOut("M. Tech")}`);
    const mtech = await mtechRes.json();

    const mcaRes = await fetch(`http://127.0.0.1:1337/api/students?${queryOut("MCA")}`);
    const mca = await mcaRes.json();

    if (imtechRes.ok && mtechRes.ok && mcaRes.ok) {
      return {
        imtech,
        mtech,
        mca,
      };
    } else {
      console.log("Error");
      throw new Error({imtech, mtech, mca});
    }
  } catch (e) {
    console.log("Error");
    throw e;
  }
};
