import Link from "next/link";
import Layout from "../../components/Layout"

export default function index({data}) {
  return (
    <Layout>
      <h1>Blog</h1>
      <h1>jsonplaceholders posts</h1>
      {
        data.map(({id, title, body}) => (
          <div key={id}>
            <h3>{id} - {title}</h3>
            <p>{body}</p>
          </div>
        ))
      }
    </Layout>
  );
}


export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
      props: {
        data,
      }
    }
  } catch (error) {
    console.log(error);
  }
}