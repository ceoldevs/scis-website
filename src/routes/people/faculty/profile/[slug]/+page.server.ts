import parser from 'xml2json';

export const prerender = false;

export const load = async ({ fetch, params }: {fetch: any, params: any}) => {
    // const url = `http://127.0.0.1:1337/api/news-events?filters\[Slug\][$eq]=s-tejaswi-awarded-for-the-best-paper-award-in-international-conference-on-distributed-computing-and-intelligent-technology-2023`
    const url = `http://127.0.0.1:1337/api/faculties?filters[siteId][$eq]=${params.slug}&populate=*`
    const res = await fetch(url);
    const item = await res.json();
    // const urlFeed = 'https://smc181002.medium.com/feed';
    console.log(item.data[0].attributes.dblp_rss);
    const urlFeed = item.data[0].attributes.dblp_rss;

    try {

        const resFeed = await fetch(urlFeed);
        const feedRaw = await resFeed.text();

        const feed = JSON.parse(parser.toJson(feedRaw));


        return {
            feed,
            data: item.data[0],
        };
    } catch(e) {
        console.log("fetch failed for dblp rss");
    }
}