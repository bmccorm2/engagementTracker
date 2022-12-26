<script lang="ts">
	import type { Database } from "$lib/database.types";
	import { enhance } from "$app/forms";

	export let objectives: Array<Database> = [];
</script>

<div class="card border-primary">
	<div class="card-header text-center bg-primary bg-gradient fs-4">Objectives</div>
	<div class="card-body">
		<div class="row mb-3">
			<div class="col v-divide">
				{#if objectives.length === 0}
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
						<p>No objectives defined.</p>
					</div>
				{:else}
					<ul>
						{#each objectives as objective}
							{@const isDone = objective.Objective.isDone}
							<li>
								<form action="?/completeObjective" method="post" use:enhance>
									{#if isDone}
										<button class="hidden-button text-success">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-check-square"
												viewBox="0 0 16 16"
											>
												<path
													d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
												/>
												<path
													d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"
												/>
											</svg>
										</button>
									{:else}
										<button class="hidden-button">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-app"
												viewBox="0 0 16 16"
											>
												<path
													d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"
												/>
											</svg>
										</button>
									{/if}
									<input type="hidden" value={objective.Objective.id} name="id" />
									<input type="hidden" value={isDone} name="isDone" />
									<button class="hidden-button" class:isDone>
										{objective.Objective.description}
									</button>
								</form>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="col-4">
				<form action="?/createObjective" method="post" use:enhance>
					<div class="row">
						<div class="col">
							<input
								type="text"
								name="description"
								placeholder="Add New Objective"
								class="form-control"
								required
							/>
						</div>
					</div>
					<div class="row mt-2">
						<div class="col text-center">
							<button class="btn btn-primary col-6">Add</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.isDone {
		text-decoration: line-through;
		opacity: 0.4;
	}
	li {
		list-style-type: none;
	}
	.hidden-button {
		border: 0px;
		background-color: transparent;
	}
</style>
