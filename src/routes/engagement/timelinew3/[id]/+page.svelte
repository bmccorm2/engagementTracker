<script lang="ts">
	import type { PageServerLoad } from "./$types";
	import { page } from "$app/stores";

	export let data: PageServerLoad;
</script>

<nav aria-label="breadcrumb">
	<ol class="breadcrumb">
		<a href="/" class="me-3">
			<img src="/svelte.png" alt="svelte" />
		</a>
		<li class="breadcrumb-item"><a href="/">Overview</a></li>
		<li class="breadcrumb-item"><a href="/engagement/{$page.params.id}">Detail</a></li>
		<li class="breadcrumb-item active">Timeline</li>
	</ol>
</nav>

<div class="container">
	<!-- https://www.w3schools.com/howto/howto_css_timeline.asp -->
	<div class="timeline">
		{#each data.events as { name, value, summary }, i}
			{@const isOddItem = i % 2 === 1}
			<div class="containerT" class:left={isOddItem} class:right={!isOddItem}>
				<div class:icon-left={isOddItem} class:icon-right={!isOddItem}>
					{#if name === "Engagement Start"}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi bi-caret-right-fill"
							viewBox="0 0 16 16"
						>
							<path
								d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
							/>
						</svg>
					{:else if name === "Activity"}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi bi-calendar-date-fill"
							viewBox="0 0 16 16"
						>
							<path
								d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"
							/>
							<path
								d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"
							/>
						</svg>
					{:else if name === "Objective"}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi bi-check-circle-fill"
							viewBox="0 0 16 16"
						>
							<path
								d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
							/>
						</svg>
					{:else if name === "Engagement Complete"}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi bi-sign-stop-fill icon"
							viewBox="0 0 16 16"
						>
							<path
								d="M10.371 8.277v-.553c0-.827-.422-1.234-.987-1.234-.572 0-.99.407-.99 1.234v.553c0 .83.418 1.237.99 1.237.565 0 .987-.408.987-1.237Zm2.586-.24c.463 0 .735-.272.735-.744s-.272-.741-.735-.741h-.774v1.485h.774Z"
							/>
							<path
								d="M4.893 0a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146A.5.5 0 0 0 11.107 0H4.893ZM3.16 10.08c-.931 0-1.447-.493-1.494-1.132h.653c.065.346.396.583.891.583.524 0 .83-.246.83-.62 0-.303-.203-.467-.637-.572l-.656-.164c-.61-.147-.978-.51-.978-1.078 0-.706.597-1.184 1.444-1.184.853 0 1.386.475 1.436 1.087h-.645c-.064-.32-.352-.542-.797-.542-.472 0-.77.246-.77.6 0 .261.196.437.553.522l.654.161c.673.164 1.06.487 1.06 1.11 0 .736-.574 1.228-1.544 1.228Zm3.427-3.51V10h-.665V6.57H4.753V6h3.006v.568H6.587Zm4.458 1.16v.544c0 1.131-.636 1.805-1.661 1.805-1.026 0-1.664-.674-1.664-1.805V7.73c0-1.136.638-1.807 1.664-1.807 1.025 0 1.66.674 1.66 1.807ZM11.52 6h1.535c.82 0 1.316.55 1.316 1.292 0 .747-.501 1.289-1.321 1.289h-.865V10h-.665V6.001Z"
							/>
						</svg>
					{/if}
				</div>
				<div class="content">
					<div class="d-flex">
						<div class="col-9 text-align-start">
							<h4>{name}</h4>
						</div>
						<div class="col text-align-end">{value}</div>
					</div>
					<p>{summary}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	/* The actual timeline (the vertical ruler) */
	.timeline {
		position: relative;
		max-width: 1200px;
		margin: 0 auto;
	}

	/* The actual timeline (the vertical ruler) */
	.timeline::after {
		content: "";
		position: absolute;
		width: 6px;
		background-color: white;
		top: 0;
		bottom: 0;
		left: 50%;
		margin-left: -3px;
	}

	/* Container around content */
	.containerT {
		padding: 10px 40px;
		position: relative;
		background-color: inherit;
		width: 50%;
	}

	/* The circles on the timeline */
	/* .containerT::after {
		content: "";
		position: absolute;
		width: 40px;
		height: 40px;
		right: -20px;
		background-color: white;
		border: 4px solid #ff9f55;
		top: 15px;
		border-radius: 50%;
		z-index: 1;
	} */

	/* The circles on the timeline */
	.icon-left {
		position: absolute;
		color: #0d6efd;
		width: 40px;
		height: 40px;
		right: -20px;
		background-color: white;
		border-radius: 50%;
		border: 4px solid white;
		top: 15px;
		z-index: 1;
	}
	.icon-right {
		position: absolute;
		color: #0d6efd;
		width: 40px;
		height: 40px;
		left: -20px;
		background-color: white;
		border-radius: 50%;
		border: 4px solid white;
		top: 15px;
		z-index: 1;
	}

	/* Place the container to the left */
	.left {
		left: 0;
	}

	/* Place the container to the right */
	.right {
		left: 50%;
	}

	/* Add arrows to the left container (pointing right) */
	.left::before {
		content: " ";
		height: 0;
		position: absolute;
		top: 22px;
		width: 0;
		z-index: 1;
		right: 30px;
		border: medium solid white;
		border-width: 10px 0 10px 10px;
		border-color: transparent transparent transparent white;
	}

	/* Add arrows to the right container (pointing left) */
	.right::before {
		content: " ";
		height: 0;
		position: absolute;
		top: 22px;
		width: 0;
		z-index: 1;
		left: 30px;
		border: medium solid white;
		border-width: 10px 10px 10px 0;
		border-color: transparent white transparent transparent;
	}

	/* Fix the circle for containers on the right side */
	.right::after {
		left: -20px;
	}

	/* The actual content */
	.content {
		padding: 10px 10px;
		background-color: gray;
		color: black;
		position: relative;
		border-radius: 6px;
		border: 4px solid #198754;
	}

	/* Media queries - Responsive timeline on screens less than 600px wide */
	@media screen and (max-width: 600px) {
		/* Place the timelime to the left */
		.timeline::after {
			left: 31px;
		}

		/* Full-width containers */
		.containerT {
			width: 100%;
			padding-left: 70px;
			padding-right: 25px;
		}

		/* Make sure that all arrows are pointing leftwards */
		.containerT::before {
			left: 60px;
			border: medium solid white;
			border-width: 10px 10px 10px 0;
			border-color: transparent white transparent transparent;
		}

		/* Make sure all circles are at the same spot */
		.left::after,
		.right::after {
			left: 15px;
		}

		/* Make all right containers behave like the left ones */
		.right {
			left: 0%;
		}
	}
</style>
