<div class="row">
	<div class="col input-group">
		<span class="input-group-text text-danger">Engagement Type</span>
		<select class="form-select" name="engagementType">
			<option value={undefined} hidden selected />
			<option value="Meeting">Meeting</option>
			<option value="Call">Call</option>
			<option value="Email">Email</option>
		</select>
	</div>
	<div class="col input-group">
		<span class="text-danger input-group-text">Date</span>
		<input type="date" class="form-control" name="date" />
	</div>
</div>
<div class="row mt-3">
	<div class="col">
		<div class="input-group">
			<span class="input-group-text w-25" id="basic-addon1">Subject</span>
			<input type="text" class="form-control" name="subject" />
		</div>
	</div>
</div>
<div class="row mt-3">
	<div class="col">
		<div class="input-group">
			<span class="input-group-text w-25" id="basic-addon1">Company Attendees</span>
			<input type="text" class="form-control" name="companyAttendees" />
		</div>
	</div>
</div>
<div class="row mt-1">
	<div class="col">
		<div class="input-group">
			<span class="input-group-text w-25" id="basic-addon1">JHI Attendees</span>
			<input type="text" class="form-control" name="jhiAttendees" />
		</div>
	</div>
</div>
