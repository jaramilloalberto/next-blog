import Head from "next/head";
import Link from "next/link";
import NavBar from "./NavBar";
import styles from "../styles/Layout.module.css"


export default function Layout({children, title, description, home}) {
  return (
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta name="Description" content={description}/>
        </Head>
        <NavBar></NavBar>
        <main>{children}</main>
        <footer>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </div>
          )}
        </footer>
    </div>
  );
}

Layout.defaultProps = {
    title: "My Blog",
    description: "My Blog in Nextjs",
}