import Layout from "../components/Layout";
import Image from "next/image";

export default function index() {
  return (
    <Layout home={true}>
        <Image src="/img/picture.jpg" width={600} height={600} />
    </Layout>
  )
}
