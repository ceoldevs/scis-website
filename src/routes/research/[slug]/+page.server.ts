import { error } from "@sveltejs/kit";
export const prerender = false;

export const load = async ({ fetch, params }: { fetch: any; params: any }) => {
  // const url = `http://127.0.0.1:1337/api/news-events?filters\[Slug\][$eq]=s-tejaswi-awarded-for-the-best-paper-award-in-international-conference-on-distributed-computing-and-intelligent-technology-2023`
  const url = `http://127.0.0.1:1337/api/research-areas?filters[Slug][$eq]=${params.slug}&populate=research_papers`;
  try {
    const res = await fetch(url);
    const item = await res.json();

    return {
      data: item.data[0].attributes.research_papers.data,
      topic: item.data[0].attributes.name,
      slug: params.slug
    };

  } catch (e: any) {
    console.log("failed");
  }
};

