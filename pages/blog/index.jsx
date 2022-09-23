import Link from "next/link";
import Layout from "../../components/Layout"

export default function index() {
  return (
    <Layout>
      <h1>Blog</h1>
      <Link  href="/blog/firstPost">
        <a>My First Post</a>
      </Link>
    </Layout>
  )
}
