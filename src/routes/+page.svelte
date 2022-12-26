<script lang="ts">
	import AddEngagement from "./AddEngagement.svelte";
	import type { PageServerData } from "./$types";
	import EngagementTable from "./EngagementTable.svelte";

	export let data: PageServerData;
</script>

<div class="row">
	<div class="col-11 text-center">
		<h1>Engagements</h1>
	</div>
	<!-- Add Button -->
	<div class="col align-self-center">
		<button
			class="hidden-button text-success"
			data-bs-target="#addEngagement"
			data-bs-toggle="offcanvas"
			title="add engagement"
		>
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
		<EngagementTable engagementData={data.engagementData} />
	</div>
</div>

<!-- OffCanvas -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="addEngagement">
	<div class="offcanvas-body mt-3">
		<AddEngagement engagementTypes={data.engagementTypeData} />
	</div>
</div>

<style>
	.hidden-button {
		border: 0px;
		background-color: transparent;
	}
</style>
