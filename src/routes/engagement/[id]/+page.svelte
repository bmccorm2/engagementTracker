<script lang="ts">
	import { enhance } from "$app/forms";
	import { onMount } from "svelte";
	import type { PageServerData } from "./$types";
	import Security from "./Security.svelte";

	export let data: PageServerData;
	let objectiveModal: HTMLElement;

	onMount(() => {
		var myModal = new bootstrap.Modal(objectiveModal, {
			keyboard: false,
		});
		// myModal.show();
	});
</script>

<div class="row mt-2">
	<div class="col">
		<h1 class="text-center">
			<u>
				{data.engagement.Security.companyName}
			</u>
		</h1>
	</div>
</div>
<div class="row mt-4">
	<div class="col-4">
		<Security {...data.engagement.Security} />
	</div>
	<div class="col-6">
		<h4>Status: {data.engagement.isDone ? "Done" : "In Progress"}</h4>
		<h4>Engagement Type: {data.engagement.Engagement_Type.description}</h4>
	</div>
	<div class="col-2">
		<ul>
			<li>
				<a href="/engagement/timeline/{data.engagementId}">View Timeline</a>
			</li>
			<li>
				<button data-bs-toggle="modal" data-bs-target="#addObjective" class="btn btn-link"
					>Add Objective</button
				>
			</li>
			<li>
				<a href="/engagement/timeline/{data.engagementId}">Add Activity</a>
			</li>
		</ul>
	</div>
</div>
<div class="row mt-2">
	<div class="col">
		<div class="card border-primary">
			<div class="card-header text-center bg-primary bg-gradient fs-4">Objectives</div>
			<div class="card-body">
				<div class="row mb-3">
					<div class="col">
						{#if data.objectives.length === 0}
							<p>
								No objectives defined. &nbsp;
								<button data-bs-toggle="modal" data-bs-target="#addObjective" class="btn btn-link"
									>Add one here.</button
								>
							</p>
						{:else}
							<ul>
								{#each data.objectives as objective}
									<li class:objective-done={objective.Objective.isDone}>
										<form action="?/completeObjective" method="post" use:enhance>
											<button class="hidden-button">
												<input type="hidden" value={objective.Objective.id} name="id" />
												<input
													type="checkbox"
													id={objective.objectiveId.id}
													checked={objective.Objective.isDone}
													name="isDone"
												/>
											</button>
											&nbsp;
											<label for={objective.objectiveId.id}>
												{objective.Objective.description}
											</label>
										</form>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="row mt-2">
	<div class="col">
		<div class="card border-primary">
			<div class="card-header text-center bg-primary bg-gradient fs-4">Activities</div>
			<div class="card-body">
				<div class="row mb-3">
					<div class="col">
						{#if data.activities.length === 0}
							<p>No activities defined. You can add one.</p>
						{:else}
							<ul>
								{#each data.activities as activity}
									<li>
										{activity.type}
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Modal -->
<form action="?/createObjective" method="post" use:enhance>
	<div
		class="modal fade"
		id="addObjective"
		tabindex="-1"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
		bind:this={objectiveModal}
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Add Objective</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
				</div>
				<div class="modal-body">
					<div class="input-group mb-3">
						<span class="input-group-text" id="basic-addon1">Description</span>
						<input type="text" class="form-control" name="description" />
					</div>
					<div class="form-check">
						<input class="form-check-input" type="checkbox" id="isDoneCheck" name="isDone" />
						<label class="form-check-label" for="isDoneCheck"> Completed </label>
					</div>
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
	.objective-done {
		text-decoration: line-through;
	}
	li {
		list-style-type: none;
	}
	.hidden-button {
		border: 0px;
		background-color: transparent;
	}
</style>
