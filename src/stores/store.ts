import { writable } from 'svelte/store';
import { CONSTANTS } from '../constants';
import type { GithubRepository, Owner } from '../models/github-repositories.dto';

export type Store = {
    searchString: string
    userInfo: Owner | null
    userRepositories: GithubRepository[] | null
    error?: string | null
}

const defaultStoreValue: Store = {
    searchString: CONSTANTS.EMPTY_STRING,
    userInfo: null,
    userRepositories: null,
    error: null
}
function createAppStore() {
    const { subscribe, update } = writable(defaultStoreValue);

    return {
        subscribe,
        updateSearchString: (newSearchString: string) => update(store => {
            store.searchString = newSearchString
            return store
        }),
        updateUserInfo: (userInfo: Owner) => update(store => {
            store.userInfo = userInfo
            return store
        }),
        updateUserRepositories: (repositories: GithubRepository[]) => update(store => {
            store.userRepositories = repositories
            return store
        }),
        updateError: (error: string | null) => update(store => {
            store.error = error
            return store
        }),
    };
}

export const appStore = createAppStore();