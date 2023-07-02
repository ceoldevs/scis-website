<script>
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import ToolTip from "$lib/components/ToolTip.svelte";
    import Metatag from '$lib/components/Metatag.svelte';
    const flow = [
        {name: "Home", link: "/"},
        {name: "About", link: "/about"},
    ];
</script>

<Metatag data={{
	title:"About Page",
	description:"SCIS WEB About Page",
	link:'http://localhost:5173/about',
	img:'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z',
	imgAlt:'http://localhost:1337/uploads/backtostudy_c5622fcee0.png?updated_at=2023-06-09T10:45:17.357Z',
	og:{
		link:'http://localhost:5173/about',
		title:"SCIS About Page",
		description:'SCIS WEB About Page'
	},
	twitter:{
		title: 'SCIS About page Twitter Card Title',
		description:'SCIS About Page Twitter Card Description'
	}
}}/>

<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10">
    <Breadcrumb flow={flow} />
    <div class="font-roboto-flex prose prose-matty lpt:text-xl tbl:text-lg text-base text-matty-900 max-w-5xl">
        <h1 class="font-fraunces font-medium lpt:text-5xl tbl:text-4xl text-3xl">
            Welcome to SCIS, University of Hyderabad: Where Passion for Technology Meets a Comprehensive Education and a Thriving Community. Explore Our <ToolTip title="View Programs"><span class="underline decoration-2 decoration-sky-700">Dynamic Programs</span></ToolTip>  ,  <ToolTip title="Check Infrastructure"><span class="underline decoration-2 decoration-sky-700">Cutting-Edge Facilities</span></ToolTip>, and Endless Opportunities for Growth and Impact.
        </h1>
        <img class="selection:bg-matty-900/60 lpt:mb-2 lpt:ml-5 lpt:float-right my-0 mx-auto rounded-lg " src="/assets/about.png" alt="about page's group" />
        <p>
            SCIS is dedicated to advancing the field of computer and information sciences and preparing students for success in a rapidly evolving technological landscape. Our faculty is comprised of highly qualified experts who bring a wealth of knowledge and real-world experience to the classroom, providing students with a comprehensive education that prepares them for success in the technology industry.
        </p>
        <p>
            We offer a wide range of undergraduate and graduate programs in computer science, information systems, and related fields. Our programs are designed to provide students with a solid foundation in the principles and practices of computer and information sciences, while also offering opportunities for hands-on learning through practical projects and research opportunities.
        </p>

        <p>
            In addition to its academic programs, SCIS is committed to supporting the local and global community through various outreach initiatives. We work closely with industry partners to address real-world problems and develop solutions that have a positive impact on society.
        </p>

        <p>
            At SCIS, students have access to state-of-the-art facilities, including computer labs, research centers, and technology-rich classrooms. These resources provide students with the tools and support they need to succeed and make meaningful contributions to the field.
        </p>

        <p>
            If you are interested in pursuing a career in computer science or a related field, we invite you to explore the programs and opportunities available at SCIS. Our faculty and staff are here to help you achieve your goals and make a positive impact in the world. Thank you for considering SCIS for your educational journey.
        </p>

    </div>

</main>