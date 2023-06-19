<script lang="ts">
    import ToolTip from "$lib/components/ToolTip.svelte";
    import { base } from "$app/paths";
    import uohyd from "$lib/images/uohyd.svg";
</script>

<footer class="py-12 px-4 font-roboto-flex text-lg lpt-lg:px-24 lpt:px-12 text-matty-900 ">
    <div class="grid lpt:grid-cols-2 tbl:grid-cols-1  gap-x-4 gap-y-8">
        <div class="mr-14 flex flex-col gap-y-4">
            <div id="contact" class="flex">
                <img src={uohyd} alt="uohyd">
                <span class="text-xl font-medium">School of Computer and Information Sciences</span>
            </div>
            <div class="grid tbl:grid-cols-3 grid-cols-2 gap-x-8 gap-y-4">
                <a href={`${base}/about`} class="text-primary-light hover:underline hover:underline-offset-2 group-hover:decoration-2 decoration-primary-light">About</a>
                <a href={`${base}/news-events`} class="text-primary-light hover:underline hover:underline-offset-2 group-hover:decoration-2 decoration-primary-light">News</a>
                <a href={`${base}/acad/admissions`} class="text-primary-light hover:underline hover:underline-offset-2 group-hover:decoration-2 decoration-primary-light">Admissions</a>
                <ToolTip title="scislearn1.uohyd.ac.in">
                    <a target="_blank" rel="noreferrer" href="https://scislearn1.uohyd.ac.in/moodle" class="text-primary-light hover:underline hover:underline-offset-2 group-hover:decoration-2 decoration-primary-light">Moodle 1</a>
                </ToolTip>
                <ToolTip title="scislearn2.uohyd.ac.in">
                    <a target="_blank" rel="noreferrer" href="https://scislearn2.uohyd.ac.in/moodle" class="text-primary-light hover:underline hover:underline-offset-2 group-hover:decoration-2 decoration-primary-light">Moodle 2</a>
                </ToolTip>
                <a href={`${base}/#`} class="text-primary-light hover:underline hover:underline-offset-2 group-hover:decoration-2 decoration-primary-light">Workshops</a>
                <a href={`${base}/#`} class="text-primary-light hover:underline hover:underline-offset-2 group-hover:decoration-2 decoration-primary-light">Careers</a>
                <a href={`${base}/research`} class="text-primary-light hover:underline hover:underline-offset-2 group-hover:decoration-2 decoration-primary-light">Research Publications</a>
            </div>
            <div class="flex">
                <ToolTip title="location" icon="location_on">
                    <div class="flex items-start gap-4">
                        <span class="material-symbols-rounded">domain</span>
                        <a class="underline underline-offset-2 group-hover:decoration-2 decoration-primary-light" href="https://goo.gl/maps/WxQiknpKWdpo1dT3A">
                            Dean | 
                            SCIS, University of Hyderabad <br>
                            P.O. Central University, 
                            Hyderabad - 500 046
                        </a>
                    </div>
                </ToolTip>
            </div>
            <div class="flex gap-4 flex-wrap">
                <div class="flex items-center gap-4">
                    <span class="material-symbols-rounded">mail</span>
                    <a href="mailto:officescis@uohyd.ac.in" class="underline decoration-primary-light underline-offset-2">officescis@uohyd.ac.in</a>
                </div>
                <div class="flex items-center gap-4">
                    <span class="material-symbols-rounded">call</span>
                    <a href="tel:91-040-23134101" class="underline decoration-primary-light underline-offset-2">91-040-23134101</a>
                    
                </div>
            </div>

        </div>
        <div class="rounded-xl flex flex-col gap-y-4 items-center shadow-lg ">
                <iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0967772996923!2d78.32964787434173!3d17.455081483443717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9305e8250fbf%3A0x16e1878d01ded942!2sSchool%20of%20Computer%20and%20Information%20Sciences!5e0!3m2!1sen!2sin!4v1686863686672!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <hr class="mt-5 mb-3 border-gray-400"/>
    <div class="flex flex-row justify-between">
        <span class="text-sm sm:text-lg">Copyright &#169;  2023 All right reserved </span>
        <span class="text-sm sm:text-lg">SCIS Web Team</span>
    </div>
</footer>