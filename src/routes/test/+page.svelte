<script lang="ts">
	import type { PageServerData } from "./$types";
	import type { engageResSuc } from "./+page.server";

	export let data: PageServerData;
	// const engagements: Array<engageResSuc> = data.engagements;

	if (data.engagements) {
		const test = data.engagements[0].created_at;
	}
</script>

<ul>
	{#each data.engagements as engagement}
		<li>
			{engagement.created_at}
		</li>
	{/each}
</ul>
