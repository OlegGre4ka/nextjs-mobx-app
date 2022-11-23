import App from "next/app";
import '../styles/globals.css'
import { Provider } from "mobx-react";
import { fetchInitialPostsStoreState, PostsStore } from "./../mobxStore/postsStore";

class MyApp extends App {
  state = {
    postsStore: new PostsStore()
  };

  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    const initialPostsStoreState = await fetchInitialPostsStoreState();

    return {
      ...appProps,
      initialPostsStoreState
    };
  }

  // Hydrate serialized state to store
  static getDerivedStateFromProps(props, state) {
    state.postsStore.hydrate(props.initialPostsStoreState);
    return state;
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider postsStore={this.state.postsStore}>
        <Component {...pageProps} />
      </Provider>
    )
    // return <Component {...pageProps} />

  }
}

export default MyApp
