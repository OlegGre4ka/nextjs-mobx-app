import { makeAutoObservable } from "mobx";
import * as API from "./../api";
import { enableStaticRendering } from 'mobx-react';

const isServer = typeof window === 'undefined';
// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(isServer);

export class PostsStore {
    posts = [];

    constructor() {
        makeAutoObservable(this)
    }

    hydratePosts(serializedStore) {
        this.posts = serializedStore.posts != null ? serializedStore.posts : []
    }
}

export async function fetchInitialPostsStoreState() {
    console.log( "getPosts")
        const { data } = await API.getPosts();
        return {
            posts: data.splice(0, 20)
        }
    }
