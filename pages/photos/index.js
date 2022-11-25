import { useContext } from "react"
import { observer, MobXProviderContext } from "mobx-react"
import { useRouter } from "next/router"
import Image from 'next/legacy/image'
import MainLayout from "../../components/MainLayout";
import styles from "./../../styles/Photos.module.scss";
import PropTypes from 'prop-types'

const Photos = observer(() => {
    const { push } = useRouter();
    const { photosStore: { photos } } = useContext(MobXProviderContext);

    return (
        <MainLayout>
            <main className="flex-direction-column">
                <h1>
                    Photos
                </h1>
                <div className="grid">
                    {photos.map(photo =>
                        <div className="card" key={photo.id} onClick={() => push(`/photos/${photo.id}`)}>
                            <div className="flex">
                                <span>{photo.id}. </span><div className="card_title">{photo.title}</div>
                            </div>
                            <Image
                                // src={photo.thumbnailUrl}
                                // src="https://via.placeholder.com/150/b04f2e.png"
                                src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
                                alt="photo" width={180} height={150} layout="responsive"
                            // placeholder="blurDataURL"
                            />
                        </div>
                    )}
                </div>
            </main>
        </MainLayout>
    )
})
export default Photos;

Photos.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        albumId: PropTypes.number,
        id: PropTypes.number,
        title: PropTypes.string,
        url: PropTypes.string,
        thumbnailUrl: PropTypes.string,
    }))
}
