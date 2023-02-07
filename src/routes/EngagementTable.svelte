<script lang="ts">
  import type { Database } from "$lib/database.types";
  export let engagementData: Array<Database>;

  const dateDifference = (oldDate: string) => {
    const currentDate = new Date();
    const old = new Date(oldDate);

    return (currentDate.getTime() - old.getTime()) / 1000 / 60 / 60 / 24;
  };
</script>

<table class="table table-striped table-hover table-responsive">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Ticker</th>
      <th scope="col">Company</th>
      <th scope="col">Engagement</th>
      <th scope="col">Status</th>
      <th scope="col">Date Started</th>
    </tr>
  </thead>
  <tbody>
    {#each engagementData as { Security, Engagement_Type, created_at, id, isDone }, i}
      {@const difference = dateDifference(created_at)}
      <tr>
        <td>{i + 1}</td>
        <td
          ><a href="/engagement/{id}">
            {Security?.ticker}
          </a>
        </td>
        <td>{Security?.companyName}</td>
        <td>{Engagement_Type?.description}</td>
        <td
          class:bg-success={isDone}
          class:bg-info={!isDone && difference <= 60}
          class:bg-danger={!isDone && difference > 60}
          class="text-center"
        >
          {#if isDone}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
              />
            </svg>
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-hourglass-split"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"
              />
            </svg>
          {/if}
        </td>
        <td>{created_at.split("T")[0]}</td>
      </tr>
    {/each}
  </tbody>
</table>
