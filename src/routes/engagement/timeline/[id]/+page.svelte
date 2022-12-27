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
	<!-- https://codepen.io/alvarotrigo/pen/jOGNrrN?editors=1100 -->
	<div class="wrapper">
		<div class="center-line" />
		{#each data.events as { name, value, summary }, i}
			<div class="row mt-3" class:row-1={i % 2 === 1} class:row-2={i % 2 === 0}>
				<section>
					{#if name === "Engagement Start"}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi bi-caret-right-square-fill icon"
							viewBox="0 0 16 16"
						>
							<path
								d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"
							/>
						</svg>
					{:else if name === "Activity"}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi bi-calendar-week-fill icon"
							viewBox="0 0 16 16"
						>
							<path
								d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
							/>
						</svg>
					{:else if name === "Objective"}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi bi-check-square-fill icon"
							viewBox="0 0 16 16"
						>
							<path
								d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"
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
					<div class="details">
						<span class="title">{name}</span>
						<span>{value}</span>
					</div>
					<p>
						{summary}
					</p>
				</section>
			</div>
		{/each}
	</div>
</div>

<style>
	::selection {
		color: #fff;
		background: #3ea0e2;
	}
	.wrapper {
		max-width: 1080px;
		margin: 50px auto;
		padding: 0 20px;
		position: relative;
	}
	.wrapper .center-line {
		position: absolute;
		height: 100%;
		width: 4px;
		background: #fff;
		left: 50%;
		top: 20px;
		transform: translateX(-50%);
	}
	.wrapper .row {
		display: flex;
	}
	.wrapper .row-1 {
		justify-content: flex-start;
	}
	.wrapper .row-2 {
		justify-content: flex-end;
	}
	.wrapper .row section {
		background: #adb5bd;
		border: 4px solid #20c997;
		color: black;
		border-radius: 5px;
		width: calc(50% - 40px);
		padding: 15px;
		position: relative;
	}
	.wrapper .row section::before {
		position: absolute;
		content: "";
		height: 15px;
		width: 15px;
		background: #fff;
		top: 28px;
		z-index: -1;
		transform: rotate(45deg);
	}
	.row-1 section::before {
		right: -7px;
	}
	.row-2 section::before {
		left: -7px;
	}
	.row section .icon,
	.center-line .scroll-icon {
		position: absolute;
		background: #f2f2f2;
		height: 40px;
		width: 40px;
		text-align: center;
		line-height: 40px;
		border-radius: 50%;
		color: #0d6efd;
		font-size: 17px;
		box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
	}
	.center-line {
		bottom: 0px;
		left: 50%;
		font-size: 25px;
		transform: translateX(-50%);
	}
	.row-1 section .icon {
		top: 15px;
		right: -60px;
	}
	.row-2 section .icon {
		top: 15px;
		left: -60px;
	}
	.row section .details {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.row section .details .title {
		font-size: 22px;
		font-weight: 600;
	}
	.row section p {
		margin: 10px 0 17px 0;
	}
	@media (max-width: 790px) {
		.wrapper .center-line {
			left: 40px;
		}
		.wrapper .row {
			margin: 30px 0 3px 60px;
		}
		.wrapper .row section {
			width: 100%;
		}
		.row-1 section::before {
			left: -7px;
		}
		.row-1 section .icon {
			left: -60px;
		}
	}
	@media (max-width: 440px) {
		.wrapper .center-line,
		.row section::before,
		.row section .icon {
			display: none;
		}
		.wrapper .row {
			margin: 10px 0;
		}
	}
</style>
