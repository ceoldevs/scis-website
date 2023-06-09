const prerender = false

import qs from 'qs';

export const load = async ({ fetch}: { fetch: any }) => {
    const query = qs.stringify({
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

        if (res.ok) {
            return {
                ...json
            };
        } else {
            console.log("Error")
            throw new Error(json);
        }
    } catch (e) {
        console.log("Error")
        throw e;
    }
};

