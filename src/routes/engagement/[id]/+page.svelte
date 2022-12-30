<script lang="ts">
	import { validate_each_argument } from "svelte/internal";
	import type { PageServerData } from "./$types";
	import Activities from "./Activities.svelte";
	import Objectives from "./Objectives.svelte";
	import Security from "./Security.svelte";

	export let data: PageServerData;

	let svgSize = 40;
</script>

<svelte:head>
	<link rel="stylesheet" href="/global.css" />
</svelte:head>

<nav aria-label="breadcrumb">
	<ol class="breadcrumb">
		<a href="/" class="me-3">
			<img src="/svelte.png" alt="svelte" />
		</a>
		<li class="breadcrumb-item"><a href="/">Overview</a></li>
		<li class="breadcrumb-item active">Detail</li>
	</ol>
</nav>

<div class="container">
	<div class="row mt-2">
		<div class="col">
			{#if !data.engagement.isDone}
				<h1 class="text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={svgSize}
						height={svgSize}
						fill="currentColor"
						class="bi bi-hourglass-split"
						viewBox="0 0 16 16"
					>
						<path
							d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"
						/>
					</svg>
					&nbsp;
					<u>
						{data.engagement.Security?.companyName}
					</u>
				</h1>
			{:else}
				<h1 class="text-center text-success">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={svgSize}
						height={svgSize}
						fill="currentColor"
						class="bi bi-check-circle-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
						/>
					</svg>
					&nbsp;
					<u>
						{data.engagement.Security?.companyName}
					</u>
				</h1>
			{/if}
		</div>
	</div>
	<hr />
	<div class="row mt-4">
		<div class="col-5 v-divide">
			<div class="row">
				<div class="col">
					<h4>
						<small>Status:</small>&nbsp;<span
							class:text-primary={!data.engagement.isDone}
							class:text-success={data.engagement.isDone}
						>
							{data.engagement.isDone ? "Complete" : "In Progress"}
						</span>
					</h4>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h4>
						<small>Engagement Type:</small>&nbsp;
						{data.engagement.Engagement_Type?.description}
					</h4>
				</div>
			</div>
			<div class="row mt-2">
				<div class="col">
					<label for="esgSummary">ESG Summary</label>
					<textarea
						style="width: 100%;"
						id="esgSummary"
						readonly
						rows="3"
						value={data.engagement.esgSummary}
					/>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col">
					<form action="?/completeEngagement" method="post">
						<button
							class="btn col-12"
							class:btn-success={data.engagement.isDone}
							class:btn-warning={!data.engagement.isDone}
							value={String(data.engagement.isDone)}
							name="isDone">{data.engagement.isDone ? "Mark In Progress" : "Mark Complete"}</button
						>
					</form>
				</div>
			</div>
		</div>
		<div class="col-5 v-divide">
			<Security {...data.engagement.Security} />
		</div>
		<div class="col-2 text-center">
			<div>
				<a href="/engagement/timeline/{data.engagementId}">View Timeline</a>
			</div>
		</div>
	</div>
	<hr />
	<div class="row mt-2">
		<div class="col"><Objectives objectives={data.objectives} /></div>
	</div>
	<hr />
	<div class="row mt-2">
		<div class="col"><Activities activities={data.activities} /></div>
	</div>
</div>
