import { useContext } from "react"
import { useRouter } from "next/router"
import PropTypes from 'prop-types'
import { inject, observer, MobXProviderContext } from "mobx-react"
import styles from '../styles/Posts.module.scss'
import MainLayout from "../components/MainLayout"
import CircleProgressBar from "../components/UI/CircleProgressBar"
// const Posts = inject("postsStore")(observer(({postsStore}) => {
const Posts = observer(() => {
  const { push } = useRouter();
  const { postsStore: { posts } } = useContext(MobXProviderContext);

  if (!posts) {
    return <CircleProgressBar />
  }

  return (
    <MainLayout>
      <h5 className={styles.title}>
        Welcome to <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js!</a> with{" "}
        <a href="https://mobx.js.org/" target="_blank" rel="noopener noreferrer">MobX</a>,{" "}
        <a href="https://www.npmjs.com/package/axios" target="_blank" rel="noopener noreferrer">Axios</a>,<br />
        Prop-types and SCSS modules!
      </h5>
      <div className="grid">
        {posts.map(post => <div className="card" key={post.id} onClick={() => push(`/posts/${post.id}`)}>
          <div className="flex">
            <span>{post.id}. </span><div className="card_title">{post.title}</div>
          </div>
        </div>
        )}
      </div>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </MainLayout>
  )
})
export default Posts;

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number
  }))
}

// export async function getStaticProps() {
//   // const { data } = await getPosts();
//   PostsStore.fetchPosts();
//   return {}
//   // return {
//   //   props: { posts: data.splice(0, 20) }, // will be passed to the page component as props
//   // }
// }
