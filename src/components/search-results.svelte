<script>
	import { appStore } from '../stores/store';
	import GithubUserInfo from './github-user-info.svelte';
	import GithubUserRepositories from './github-user-repositories.svelte';

	/**
	 * @type {import("../models/github-repositories.dto").Owner}
	 */
	let owner;
	/**
	 * @type {import("../models/github-repositories.dto").GithubRepository[]}
	 */
	let userRepositories;

	appStore.subscribe(async (res) => {
		if (res.userInfo && owner != res.userInfo) {
			owner = res.userInfo;
		}
		if (res.userRepositories && userRepositories != res.userRepositories) {
			userRepositories = res.userRepositories;
		}
	});
</script>

{#if owner && userRepositories}
	<GithubUserInfo {owner} />
	<GithubUserRepositories repositories={userRepositories} />
{/if}
