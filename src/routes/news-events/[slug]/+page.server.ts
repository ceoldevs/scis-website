export const prerender = false;
import qs from 'qs';

export const load = async ({ fetch, params }: {fetch: any, params: any}) => {
  const query = qs.stringify({
    filters : {
      Slug:{
        $eq:params.slug
      }
    },
    populate:"*"
  })
    // const url = `http://127.0.0.1:1337/api/news-events?filters\[Slug\][$eq]=s-tejaswi-awarded-for-the-best-paper-award-in-international-conference-on-distributed-computing-and-intelligent-technology-2023`
    const url = `http://127.0.0.1:1337/api/news-events/?${query}`
    try {
        const res = await fetch(url);
        const item = await res.json();
        return {
          data: item.data[0],
        };
        
    
      } catch (e: any) {
        console.log("failed");
      }
    };
