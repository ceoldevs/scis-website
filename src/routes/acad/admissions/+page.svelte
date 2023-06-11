<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
  	import { afterUpdate } from 'svelte';
	export let data: any;

// 	let markdownContent = '';

// 	onMount(async () => {
//     const response = await fetch('admissions/Fees/feeStructure.md');
//     if (response.ok) {
//       markdownContent = await response.text();
//     } else {
//       console.error('Error fetching Markdown file:', response.status);
//     }
//   });

</script>
<main class="lpt-lg:px-24 lpt:px-14 px-4 mt-20 mb-10 font-roboto-flex text-lg">
	<div class="flex flex-row">
		<div class="flex flex-col gap-y-10 basis-3/4 mr-20">
			{#each data.data as record}
			{#if record.attributes.course == "Fee Structure"}
			<h2 class="font-sans font-medium text-3xl">
				Fee Structure
				
			</h2>
				<div class="prose prose-custom prose-matty">
					<!-- {@html markdownContent} -->
					<table>
						<tr>
							<th>Course Name</th>
							<th>Admission Fee</th>
							<th>Fee at the time of Admission</th>
							<th>Fee per sem</th>
							<th>Tution Fee</th>
							<th>Miscellaneous Fee</th>
							<th>Deposits Refundable</th>
							<th>Grand Total</th>
						</tr>
						<tr>
							<td>Ph.D</td>
							<td>320</td>
							<td>330</td>
							<td>---</td>
							<td>1090</td>
							<td>3630</td>
							<td>1750</td>
							<td>7120</td>
						</tr>
						<tr>
							<td>5-yr Int. M.Tech(CS)</td>
							<td>320</td>
							<td>330+19000</td>
							<td>---</td>
							<td>10465</td>
							<td>5905</td>
							<td>1750</td>
							<td>37770</td>
						</tr>
						<tr>
							<td>M.Tech (CS/AI/IT)</td>
							<td>320</td>
							<td>330+19000</td>
							<td>---</td>
							<td>10465</td>
							<td>5905</td>
							<td>1750</td>
							<td>37770</td>
						</tr>
						<tr>
							<td>MCA</td>
							<td>320</td>
							<td>330+19000</td>
							<td>---</td>
							<td>10540</td>
							<td>5685</td>
							<td>1755</td>
							<td>37630</td>
						</tr>
						
					</table>
					<p class="gap-y-20">{record.attributes.description}</p>

				</div>
			{:else if record.attributes.course == "Mess Deposits"}
			<h2 class="font-sans font-medium text-3xl">
				Mess Deposits to be paid by hostelers
			</h2>
				<div class="prose prose-custom prose-matty">
					<table>
						<tr>
							<td>Particulars</td>
							<td>General Category</td>
							<td>SC/ST Scholarship holders</td>
						</tr>
						<tr>
							<td>Mess Deposit for 5-Year Integrated courses</td>
							<td>5000*</td>
							<td>1500</td>
						</tr>
						<tr>
							<td>Mess Deposit for all other courses</td>
							<td>2500</td>
							<td>1500</td>
						</tr>
						<tr>
							<td>Room Rent(Per Semester)</td>
							<td>500</td>
							<td>Nil</td>
						</tr>
						<tr>
							<td>Crockery Fees(Per Year)</td>
							<td>250</td>
							<td>250</td>
						</tr>
						<tr>
							<td>Hostel Caution Money Deposit(Refundable except service charge)</td>
							<td>600</td>
							<td>400</td>
						</tr>
					</table>
					<p class="gap-y-20">{record.attributes.description}</p>

				</div>
			{:else}
			<div class="flex flex-col justify-center">
				<h2 class="font-sans font-medium text-3xl mb-5">
					Want to join {record.attributes.course}
				</h2>
				<p class="gap-y-20 text-neutral-40">{record.attributes.description}</p>
				<a href="faculty" class="text-sky-300 underline underline-offset-2 hover:text-sky-600">view more course details</a>
			</div>
			{/if}
			{/each} 

		</div>
		<div class="flex flex-col gap-y-5 basis-1/4 ml-5">
			<h2 class="">In this Page</h2>
			{#each data.data as record}
				<a href={record.attributes.id}> {record.attributes.course} Admission</a>
			{/each}
		</div>
	</div>
</main>
<!-- <div class="grid grid-cols-2">
	<div class="card-zoom">
		<div class="relative bg-discussion h-[28rem] bg-no-repeat bg-cover card-zoom-image">
		</div>
		<div class="card-zoom-text text-3xl font-medium">Collaborate</div>
	</div>
	<div class="card-zoom">
		<div class="relative bg-achieve h-[28rem] bg-no-repeat bg-cover card-zoom-image">
		</div>
		<div class="card-zoom-text text-3xl font-medium">Achieve</div>
	</div>
</div> -->