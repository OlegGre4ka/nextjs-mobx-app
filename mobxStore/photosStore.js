import { makeAutoObservable } from "mobx";
import * as API from "./../api";
import { getPhotos } from "./../api/photos";
import { enableStaticRendering } from 'mobx-react';

const isServer = typeof window === 'undefined';
// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(isServer);

export class PhotosStore {
    photos = [];

    constructor() {
        makeAutoObservable(this)
    }

    hydratePhotos(serializedStore) {
        this.photos = serializedStore.photos != null ? serializedStore.photos : []
    }
}

export async function fetchInitialPhotosStoreState() {
    const { data } = await getPhotos();
    console.log("getPhotos");

    return {
        photos: data.splice(0,20)
    }
}

