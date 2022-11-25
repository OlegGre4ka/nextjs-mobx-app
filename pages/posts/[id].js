import { useContext } from "react"
import { observer, MobXProviderContext } from "mobx-react"
import MainLayout from "../../components/MainLayout"
import styles from "./../../styles/Photos.module.scss"
// import styles from "./../../styles/Photos.module.scss"

import Image from 'next/legacy/image'
import { useRouter } from "next/router"
import { MdOutlineKeyboardBackspace } from "react-icons/md"

const Post = observer(() => {
    const { push, query } = useRouter();
    const { postsStore: { posts } } = useContext(MobXProviderContext);
    const { id, title, body } = posts.find(post => post.id === +query.id);

    return (
        <MainLayout isMain={false}>
            <MdOutlineKeyboardBackspace
                style={{ fontSize: '28px', margin: "10px 0 0 15px", cursor: "pointer" }}
                onClick={() => push("/")} />
            <div className="flex-direction-column">
                <h1 className={styles.photo_id_title}>
                    Post - {query.id}
                </h1>
                <div className={styles.photo_id_card}>
                    <div className="flex">
                        <span>{id}. </span><div className="card_title">{title}</div>
                    </div>
                    <div className={styles.card_body}>{body}</div>
                </div>
            </div>
        </MainLayout>
    )
})
export default Post;