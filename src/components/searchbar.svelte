<script>
	import { CONSTANTS } from '../constants';
	import githubService from '../services/api/github.service';
	import { appStore } from '../stores/store';
	let searchString = '';
	/**
	 * @type {string | null | undefined}
	 */
	let error;

	async function handleOnClick() {
		appStore.updateSearchString(searchString);
		await getGithubUserInfo(searchString);
	}

	/**
	 * @param {string} searchString
	 */
	async function getGithubUserInfo(searchString) {
		if (!searchString || searchString.length <= 0) {
			return;
		}
		githubService
			.getUserRepos(searchString)
			.then((res) => {
				if (res.length == 0) {
					throw new Error(CONSTANTS.GITHUB_ERROR_MESSAGES.NOT_FOUND);
				}
				appStore.updateUserInfo(res[0].owner);
				appStore.updateUserRepositories(res);
			})
			.catch((e) => {
				appStore.updateError(e.message);
			});
	}

	appStore.subscribe((res) => {
		error = res.error;
	});
</script>

<section>
	<form>
		<label>
			Github Username:
			<input bind:value={searchString} type="text" name="name" />
		</label>
		<input type="button" value="Find" on:click={handleOnClick} />
	</form>
	{#if error}
		<div class="alert alert-danger" role="alert">
			{error}
		</div>
	{/if}
</section>
