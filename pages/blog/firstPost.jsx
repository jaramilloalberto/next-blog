import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Layout from "../../components/Layout"

function firtPost() {
  return (
    <Layout>
    <Image
      src="/img/picture.jpg"
      width={400}
      height={400}
    ></Image>
    </Layout>
  )
}

export default firtPost