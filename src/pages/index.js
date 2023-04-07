import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { getSession } from "next-auth/react";

export default function Home({products}) {
  return (
    <div className="bg-greenzon_green">
      <Head>
        <title>Greenzon</title>
      </Head>
      {/* header  */}
      <Header/>
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner/>
        {/* Product feed */}
        <ProductFeed products={products}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session
    },
  };  
}