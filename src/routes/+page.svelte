<script lang="ts">
	import { onMount } from "svelte";
	import AddEngagement from "$lib/AddEngagement.svelte";
	import type { PageServerData } from "./$types";
	import { enhance } from "$app/forms";

	export let data: PageServerData;
	let engagementModal: HTMLElement;
</script>

<div class="row">
	<div class="col-11 text-center">
		<h1>Engagements</h1>
	</div>
	<div class="col text-end align-self-center">
		<button id="addButton" style="" data-bs-toggle="modal" data-bs-target="#addEngagementModal">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				class="bi bi-plus-circle"
				viewBox="0 0 16 16"
			>
				<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
				<path
					d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
				/>
			</svg>
		</button>
	</div>
	<hr />
</div>
<div class="row ">
	<div class="col">
		<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Ticker</th>
					<th scope="col">Company</th>
					<th scope="col">Engagement</th>
					<th scope="col">Date Started</th>
				</tr>
			</thead>
			<tbody>
				{#each data.engagementData as { Security, Engagement_Type, created_at, id }, i}
					<tr>
						<th>{i + 1}</th>
						<td
							><a href="/engagement/{id}">
								{Security?.ticker}
							</a>
						</td>
						<td>{Security?.companyName}</td>
						<td>{Engagement_Type?.description}</td>
						<td>{created_at.split("T")[0]}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<!-- Modal -->
<form action="?/create" method="post" use:enhance>
	<div
		class="modal fade"
		id="addEngagementModal"
		tabindex="-1"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
		bind:this={engagementModal}
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Add Engagement</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
				</div>
				<div class="modal-body">
					<AddEngagement engagementTypes={data.engagementTypeData} />
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
					<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
				</div>
			</div>
		</div>
	</div>
</form>

<style>
	#addButton {
		border: 0px;
		background-color: transparent;
	}
</style>
