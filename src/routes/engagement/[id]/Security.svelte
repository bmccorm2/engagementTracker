<script lang="ts">
	export let ticker: String;
	export let companyName: String;
	export let gicsSector: String;
	export let countryOfRisk: String;
</script>

<div class="card border-primary">
	<div class="card-header text-center bg-primary bg-gradient fs-4">Company Details</div>
	<div class="card-body">
		<div class="row mb-3">
			<div class="col d-grid">
				<div class="input-group">
					<span class="input-group-text sec-details-width">Ticker</span>
					<input type="text" class="form-control read-only" readonly value={ticker} />
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text sec-details-width">Company</span>
					</div>
					<input type="text" class="form-control read-only" readonly value={companyName} />
				</div>
			</div>
		</div>
		<div class="row mt-1">
			<div class="col">
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text sec-details-width" id="basic-addon3">GICS Sector</span>
					</div>
					<input type="text" class="form-control read-only" readonly value={gicsSector} />
				</div>
			</div>
		</div>
		<div class="row mt-1">
			<div class="col">
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text sec-details-width" id="basic-addon3">Country Of Risk</span
						>
					</div>
					<input type="text" class="form-control read-only" readonly value={countryOfRisk} />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.read-only {
		background-color: lightgray;
	}
	.sec-details-width {
		width: 140px;
	}
</style>
