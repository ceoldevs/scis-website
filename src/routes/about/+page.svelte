<script>
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import ToolTip from "$lib/components/ToolTip.svelte";
    import Metatag from '$lib/components/Metatag.svelte';
    import {env} from '$env/dynamic/public' ;
    const flow = [
        {name: "Home", link: "/"},
        {name: "About", link: "/about"},
    ];
</script>

<Metatag data={{
	title:"why scis ?",
	description:"SCIS WEB | why scis?",
	link:`${env.PUBLIC_SVELTEURL||'http://localhost:5173'}/about`,
	img:`${env.PUBLIC_STRAPIURL||'http://localhost:1337'}/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z`,
	imgAlt:'SCIS Site',
	og:{
		title:"SCIS | why scis?",
		description:'SCIS WEB | why scis?'
	},
	twitter:{
		title: 'SCIS why scis? Twitter Card Title',
		description:'SCIS why scis? Twitter Card Description'
	}
}}/>

<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10">
    <Breadcrumb flow={flow} />
    <div class="font-roboto-flex prose prose-matty lpt:text-xl tbl:text-lg text-base text-matty-900 max-w-5xl">
        <h1 class="font-fraunces font-medium lpt:text-5xl tbl:text-4xl text-3xl">
            Why study in SCIS@UOH   ? 
        </h1>
        <img class="selection:bg-matty-900/60 lpt:mb-2 lpt:ml-5 lpt:float-right my-0 mx-auto rounded-lg " src="/assets/about.png" alt="about page's group" />
        <p>
            A question that is definitely on yours and your parents' minds around this time of the year is which college to join. While wishing you all the best for getting into one of the top IITs, take also a look at the School of Computer and Information Sciences (SCIS), University of Hyderabad (UOH). You are sure to discover a hidden gem: we are not that well-known outside a select circle of quality research organisations and institutions such as DRDO, ISRO, IITs and NITs. Talk to them and you will be surprised!   
        </p>
        <p>
            Why SCIS@UOH? The answer is <span class="text-primary-light">"the best value for your money!"</span> Look at our distinguished faculty, the flexible curriculum, the focus on learning, placement history and alumni profiles, a spectacular campus, a truly premier university with specialisations ranging from hard sciences to fine and performing arts - where else can you get all these and what more do you want?! ... And then, <span class="text-primary-light">our fees: around Rs. 60,000 a year</span> should tell you the truth. No other institution can beat us, however hard they may try.
        </p>

        <p>
            Look at our faculty: 27 in all, all with PhDs. 5 have PhDs from top universities abroad, 8 from IITs/IISc/ISI! Three of our faculty are in the Stanford list of top-2% researchers globally. Our students are an integral part of the faculty research projects and have published papers in reputed journals and global conferences. SCIS faculty are experts using top-class textbooks and giving thought-provoking assignments that make the students think and learn by themselves. Our teaching is not bound by rigid syllabi, nor are our question papers and exams the mundane exercises seen elsewhere: students will find them challenging and fun!    
        </p>

        <p>
            Our curriculum is another aspect that should excite any learner - whether interested in the fundamentals or the cutting-edge. Every course goes beyond the pale outlines of textbooks into research areas and open-ended questions. The curriculum adheres to the well-rounded development goals of NEP 2020. Students get a rock-solid grounding in the core subjects, widen their horizons with multidisciplinary components, both cores and open electives, from Arts, Humanities and the Social Sciences, and prepare for the future with the state-of-the-art electives that cover the research areas of the faculty. Finally, <span class="text-primary-light">the focus is most definitely on learning</span> not on training to pass exams without gaining any employable or research skills.
        </p>

        <p>
            The result is there for all to see. Our students are sought-after by employers and are <span class="text-primary-light">placed in well-known companies such as EA Sports, IBM, Intel, Marvel, Samsung, Teradata, </span> and many more. The median salaries are around Rs. 10 L per annum. Our students also gain admissions in some of the best universities across the world — Rochester Institute of Technology, University of California at San Diego, Saarland University, etc. — for their continuing studies. Our alumni are faculty in institutions across the world and India - in New York University, Duke University, NITs, etc. Many are successful entrepreneurs utilising the learning imparted here to provide employment to several hundred others.    
        </p>

        <p>
            Add to all these a university that is consistently ranked in NIRF top-10, top-three for research and the best university in India according to Nature ranking for research (2020). Not to mention the serene and beautiful campus, students from all over India and with interests in arts to sciences, 24-hour access to labs and several buildings, where else do you get a better chance to explore yourselves and your interests, to develop holistically with tolerance and understanding of different cultures, we truly liberate your minds and expand your horizons. After all, the motto of the university is, <span class="text-primary-light"> "सा विद्या या विमुक्तये" </span>, the education that liberates ...
        </p>

    </div>

</main>