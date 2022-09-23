import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

function about() {
  return (
    <Layout title="My Blog - About">
      <Link href="/"> 
        <a>Back</a>
      </Link>
      <Image src="/img/picture.jpg" width={600} height={600} />
    </Layout>
  );
}

export default about;