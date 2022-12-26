<script lang="ts">
	import type { Database } from "$lib/database.types";
	import AddActivity from "./AddActivity.svelte";
	import { enhance } from "$app/forms";

	export let activities: Array<Database> = [];
</script>

<div class="card border-primary">
	<div class="card-header text-center bg-primary bg-gradient fs-4">Activities</div>
	<div class="card-body">
		<div class="row mb-3">
			<div class="col-10 v-divide">
				{#if activities.length === 0}
					<div class="d-flex text-danger">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-exclamation-circle"
							viewBox="0 0 16 16"
						>
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
							<path
								d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
							/>
						</svg>
						&nbsp; &nbsp;
						<p>No Activities defined.</p>
					</div>
				{:else}
					<div class="accordion accordion-flush" id="activityAccordion">
						{#each activities as activity}
							{@const date = activity.created_at.split("T")[0]}
							{@const engagementType = activity.Activity.engagementType}
							{@const subject = activity.Activity.subject}
							<div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingOne">
									<button
										class="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#a{activity.activityId}"
									>
										{date} - {subject}
									</button>
								</h2>
								<div
									id="a{activity.activityId}"
									class="accordion-collapse collapse"
									aria-labelledby="flush-headingOne"
									data-bs-parent="#activityAccordion"
								>
									<div class="accordion-body">
										<div class="input-group mb-3">
											<span class="input-group-text title-width">Type</span>
											<input type="text" class="form-control" readonly value={engagementType} />
										</div>
										<div class="input-group mb-1">
											<span class="input-group-text title-width">Company Attendees</span>
											<input
												type="text"
												class="form-control"
												readonly
												value={activity.Activity.companyAttendees}
											/>
										</div>
										<div class="input-group mb-3">
											<span class="input-group-text title-width">JHI Attendees</span>
											<input
												type="text"
												class="form-control"
												readonly
												value={activity.Activity.jhiAttendees}
											/>
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
			<div class="col-2 text-center">
				<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addActivity"
					>Add activity</button
				>
			</div>
		</div>
	</div>
</div>

<!-- Modal -->
<form action="?/createActivity" method="post" use:enhance>
	<div class="modal fade" id="addActivity" tabindex="-1">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title" id="exampleModalLabel">New Activity</h4>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
				</div>
				<div class="modal-body">
					<AddActivity />
				</div>
				<div class="modal-footer">
					<button type="reset" class="btn btn-danger col-4" data-bs-dismiss="modal">Cancel</button>
					<button type="submit" data-bs-dismiss="modal" class="btn btn-primary col-4">Save</button>
				</div>
			</div>
		</div>
	</div>
</form>

<style>
	.title-width {
		width: 25%;
	}
</style>
