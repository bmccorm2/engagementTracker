<script lang="ts">
	import AutoComplete from "simple-svelte-autocomplete";
	import type { Database } from "$lib/database.types";
	import { enhance } from "$app/forms";

	export let engagementTypes: Database;

	const getSecurities = async (keyword: string) => {
		const url = `/api/security?keyword=${keyword}`;
		const response = await fetch(url);
		const json = await response.json();
		return json;
	};
</script>

<form action="?/create" method="post" use:enhance>
	<div class="card border-primary">
		<div class="card-header text-center bg-primary bg-gradient fs-4">New Engagement</div>
		<div class="card-body">
			<div class="row">
				<div class="col text-center">
					<AutoComplete
						searchFunction={getSecurities}
						delay={200}
						localFiltering={false}
						labelFieldName="ticker"
						showClear
						hideArrow
						showLoadingIndicator
						placeholder="Security"
						required
						name="security"
					/>
				</div>
			</div>
			<div class="row">
				<div class="col mt-2 text-center">
					<AutoComplete
						items={engagementTypes}
						labelFieldName="description"
						showClear
						hideArrow
						placeholder="Engagement"
						name="engagementType"
						required
					/>
				</div>
			</div>
		</div>
		<div class="card-footer text-center">
			<button
				class="btn btn-danger col-5"
				data-bs-target="#addEngagement"
				data-bs-toggle="offcanvas"
				type="reset">Cancel</button
			>
			<button
				class="btn btn-primary col-5"
				data-bs-target="#addEngagement"
				data-bs-toggle="offcanvas">Add</button
			>
		</div>
	</div>
</form>
