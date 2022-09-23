import Head from "next/head";
import styles from "../styles/Layout.module.css"

export default function Layout({children, title, description}) {
  return (
    <div className={styles.container}>
        <Head>
            <title>{title}</title>
            <meta name="Description" content={description}/>
        </Head>
        <nav>navbar</nav>
        <main>{children}</main>
        <footer>footer</footer>
    </div>
  );
}

Layout.defaultProps = {
    title: "My Blog",
    description: "My Blog in Nextjs",
}