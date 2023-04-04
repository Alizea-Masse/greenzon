import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home() {
  return (
    <div className="bg-green-100">
      <Head>
        <title>Greenzon</title>
      </Head>
      {/* header  */}
      <Header/>
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner/>
        {/* Product feed */}
        <ProductFeed/>
      </main>
      
    </div>
  );
}
