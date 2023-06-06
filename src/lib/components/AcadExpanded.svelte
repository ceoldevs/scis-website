
<script>
    export let root = "/acad";
    let megamenu = false;
    let style = "hidden";
</script>

<div class="cursor-pointer ">
    <button class="flex items-center peer font-roboto-flex" on:click={() => (style == "hidden" ? style = "flex" : style = "hidden")}>
        Academics
        <span class="material-symbols-rounded">
            {#if style == "hidden"}
                keyboard_arrow_down
            {:else}
                keyboard_arrow_up
            {/if}
        </span>
    </button>
    <div class={"z-[10000] fixed w-screen top-34 pt-7 left-0 " + style}>
        <div class="z-[1000] grid grid-cols-7 justify-items-center items-center lpt-lg:gap-x-16 lpt:gap-x-8 sm:gap-x-4 w-full lpt-lg:px-12 lpt:px-8 tbl:px-6 px-2 py-6 bg-background-light border-[0.5px] border-outline-light/20">
            <div class="flex flex-col gap-y-4 col-span-4">
                <h3> Programmes </h3>
                <div class="flex flex-col gap-y-1">
                    <a on:click={() => (style = "hidden")} href={root + "/programmes/undergrad"} class="text-primary-light hover:underline decoration-primary-light decoration-1 text-xl">Undergraduate Programs</a>
                    <span class="text-neutralvariant-40">
                        Join us after 12th in our Integrated Masters of Technology through JoSSA. 
                        <a 
                            on:click={() => (style = "hidden")}
                            href={ root + "/programmes/undergrad/imtech" }
                            class="text-primary-light underline decoration-primary-light decoration-1"
                        >
                            Check out more about this course
                        </a>
                    </span>
                </div>
                <div class="flex flex-col gap-y-1">
                    <a on:click={() => (style = "hidden")} href={root + "/programmes/postgrad"} class="text-primary-light hover:underline decoration-primary-light decoration-1 text-xl">Postgradate Programs</a>
                    <span class="text-neutralvariant-40">
                        Finished your GATE? join us with 
                        <a on:click={() => (style = "hidden")} 
                            href={ root + "/programmes/postgrad/mtech" }
                            class="text-primary-light underline decoration-primary-light decoration-1"
                        >
                            Masters
                        </a> 
                        and 
                        <a on:click={() => (style = "hidden")} 
                            href={ root + "/programmes/postgrad/phd" }
                            class="text-primary-light underline decoration-primary-light decoration-1"
                        >
                            Doctoral
                        </a> 
                        programs in Artificial Intelligence, Computer Science and Information Technologies in Banking.
                    </span>
                </div>
            </div>
            <div class="flex flex-col col-span-3 gap-y-6 justify-between">
                <div class="flex flex-col">
                    <a on:click={() => (style = "hidden")} href= { root + "/admissions" } class="text-primary-light text-lg">
                        Admissions
                    </a>
                    <span class="text-neutralvariant-40">
                        Want to join UoH as a Computer Scientist? Learn more about our admission process
                    </span>
                </div>
                <div class="flex flex-col">
                    <a on:click={() => (style = "hidden")} href= { root + "/programmes" } class="text-primary-light text-lg">
                        Syllabus
                    </a>
                    <span class="text-neutralvariant-40">
                        Checkout the syllabus of the course you are interested or studying in.
                    </span>
                </div>
            </div>
        </div>
        <button class="z-[999] fixed h-screen w-screen bg-neutralvariant-10/40" on:click={() => (style == "hidden" ? style = "flex" : style = "hidden")}> </button>
    </div>
</div>