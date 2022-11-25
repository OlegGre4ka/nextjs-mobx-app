import App from "next/app";
import '../styles/globals.css'
import { Provider } from "mobx-react";
import { fetchInitialPostsStoreState, PostsStore } from "./../mobxStore/postsStore";
import { fetchInitialPhotosStoreState, PhotosStore } from "./../mobxStore/photosStore";

class MyApp extends App {
  state = {
    postsStore: new PostsStore(),
    photosStore: new PhotosStore()
  };

  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext, state) {
    console.log(appContext, state, "getInitialProps")
    const appProps = await App.getInitialProps(appContext);
    const initialPostsStoreState = await fetchInitialPostsStoreState();
    const initialPhotosStoreState = await fetchInitialPhotosStoreState();
    return {
      ...appProps,
      initialPostsStoreState,
      initialPhotosStoreState
    };
  }

  // Hydrate serialized state to store
  static getDerivedStateFromProps(props, state) {
    state.postsStore.hydratePosts(props.initialPostsStoreState);
    state.photosStore.hydratePhotos(props.initialPhotosStoreState);

    return state;
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider postsStore={this.state.postsStore} photosStore={this.state.photosStore}>
        <Component {...pageProps} />
      </Provider>
    )
    // return <Component {...pageProps} />

  }
}

export default MyApp
