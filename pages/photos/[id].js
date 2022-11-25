import { useContext } from "react"
import { observer, MobXProviderContext } from "mobx-react"
import MainLayout from "../../components/MainLayout"
import styles from "./../../styles/Photos.module.scss"
import Image from 'next/legacy/image'
import { useRouter } from "next/router"
import { MdOutlineKeyboardBackspace } from "react-icons/md"

const Photo = observer(() => {
    const { push, query } = useRouter();
    const { photosStore: { photos } } = useContext(MobXProviderContext);
    const { id, title } = photos.find(photo => photo.id === +query.id);

    return (
        <MainLayout isMain={false}>
            <MdOutlineKeyboardBackspace
                style={{ fontSize: '28px', margin: "10px 0 0 15px", cursor: "pointer" }}
                onClick={() => push("/photos")} />
            <div className="flex-direction-column">
                <h1 className={styles.photo_id_title}>
                    Photo - {query.id}
                </h1>
                <div className={styles.photo_id_card}>
                    <div className="flex">
                        <span>{id}. </span><div className="card_title">{title}</div>
                    </div>
                    <Image
                        // src={photo.thumbnailUrl}
                        src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
                        alt="photo" width={180} height={150} layout="responsive"
                    />
                </div>
            </div>
        </MainLayout>
    )
})
export default Photo;