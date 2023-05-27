<script>
  import { marked } from 'marked';

    export let data;

    // @ts-ignore
    const getResearch = rt => Object.values(rt)[0];
    const researches = data.feed.dblpperson.r.slice(0,10)
 
</script>

<main class="flex lpt-lg:flex-row flex-col justify-between gap-8 lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
    <!-- {console.log(data.data)} -->
    <div class="flex-2 flex flex-col">
        <div class="flex gap-x-10 flex-col items-center lpt-lg:justify-start">
            <img 
                class="w-48 h-60 object-cover rounded-xl"
                src={`http://localhost:1337${data.data.attributes.display_pic.data.attributes.url}`} alt={data.data.attributes.siteId} 
            />
            <h1 class="my-4 text-4xl">{data.data.attributes.name}</h1>
        </div>
        <div class="text-neutralvariant-30 prose mt-4">
            <b class="not-prose"> Education: </b>
            {@html marked(data.data.attributes.education)}
        </div>
        <div class="text-base mt-4">
                <b>Areas of Interest: </b>
                {#each data.data.attributes.areaOfInterest as interest, i}
                    {#if i == data.data.attributes.areaOfInterest.length - 1}
                        <span>{interest}</span>
                    {:else}
                        <span>{interest},</span>
                    {/if}
                {/each}
        </div>
        <div class="text-sm mt-4">
            <span>Email: <a class="underline text-primary-light decoration-1" href={`mailto:${data.data.attributes.email}`}>{data.data.attributes.email}</a></span> | 
            <span><a class="underline text-primary-light decoration-1" href={`mailto:${data.data.attributes.siteId}`}>Personal Website</a></span>
        </div>
        <div class="prose mt-4">
            <h3>Professional Experience and Activities</h3>
            {@html marked(data.data.attributes.otherInformation)}
        </div>
    </div>
    <div class="prose">
        <h3>Researches:</h3>
        <div>
            <ul>
            {#each researches as research}
                <!-- {console.log(getResearch(research))} -->
                <li class="">
                    <span>
                    {getResearch(research).title}
                    </span>
                    <a class="text-primary-light underline decoration-1" href={getResearch(research).ee}>Click here to read</a>
                    
                </li>
            {/each}
            </ul>
        </div>
    </div>
</main>