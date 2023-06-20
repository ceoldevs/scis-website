<script lang="ts">
    export let data: any;
</script>

<h3 class="text-2xl font-medium">Event Details</h3>
<div class="flex flex-col gap-y-2">
    <p class="flex items-center gap-x-2">
    <span class="material-symbols-rounded">calendar_month</span>
    {data.data.attributes.eventTimeDetails}
    </p>
    <p class="flex items-center gap-x-2">
    <span class="material-symbols-rounded">location_on</span>
    {data.data.attributes.venue}
    </p>
</div>