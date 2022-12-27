<script>
	/**
	 * @type {import("../models/github-repositories.dto").Owner}
	 */
	export let owner;
</script>

{#if owner != null}
	<div>
		<div class="p-2">
			<div class="card profile-card-width">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img class="card-img-top" src={owner.avatar_url} />
				<div class="card-body">
					<h5 class="card-title">{owner.login}</h5>
					<p class="card-text">
						{owner.type}
					</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.profile-card-width {
		width: 10rem;
	}
</style>
