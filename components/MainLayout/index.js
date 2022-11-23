import styles from "./MainLayout.module.scss";
import Link from 'next/link';
import Head from 'next/head'
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
    const { pathname } = useRouter();
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <div className="flex"> */}
            <div className={styles.navbar}>
                <div>NextJs-Mobx</div>
                <div>
                    <Link href="/" className={pathname === "/" ? styles.activeLink : styles.link}>Posts</Link>
                    <Link href="/photos" className={pathname === "/photos" ? styles.activeLink : styles.link}>Photos</Link>
                </div>
            </div>
            {/* </div> */}

            <div>{children}</div>
        </>
    )
}
export default MainLayout