<script lang="ts">
	import AutoComplete from "simple-svelte-autocomplete";
	import type { Database } from "$lib/database.types";

	export let engagementTypes: Database;

	const getSecurities = async (keyword: string) => {
		const url = `/api/security?keyword=${keyword}`;
		const response = await fetch(url);
		const json = await response.json();
		return json;
	};
</script>

<div class="row">
	<div class="col">
		<div class="input-group mb-3">
			<span class="input-group-text sec-details-width" id="basic-addon3">Security</span>
			<AutoComplete
				searchFunction={getSecurities}
				delay={200}
				localFiltering={false}
				labelFieldName="ticker"
				showClear
				hideArrow
				showLoadingIndicator
				name="security"
			/>
		</div>
	</div>
</div>
<div class="row">
	<div class="col">
		<div class="input-group mb-3">
			<span class="input-group-text sec-details-width" id="basic-addon3">Engagement Type</span>
			<AutoComplete
				items={engagementTypes}
				labelFieldName="description"
				showClear
				hideArrow
				name="engagementType"
			/>
		</div>
	</div>
</div>

<style>
	.sec-details-width {
		width: 35%;
	}
</style>
