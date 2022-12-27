<script>
	/**
	 * @type {import("../models/github-repositories.dto").GithubRepository[]}
	 */
	export let repositories;
</script>

<h2>Repository List</h2>
<div class="d-flex justify-content-start flex-wrap align-items-start" style="height: 300px">
	{#each repositories as repository}
		<div class="p-2">
			<div class="card card-width p-2">
				<div class="card-body" style="height: 200px">
					<h5 class="card-title">{repository.name}</h5>
					<h6 class="card-subtitle mb-2 text-muted">
						{repository.description}
					</h6>
					<a href={repository.html_url} class="card-link"> Git URL </a>
					<a href={repository.url} class="card-link"> URL </a>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.card-width {
		width: 18rem;
	}
</style>
