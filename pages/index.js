// import { mongooseConnect } from "@/lib/mongoose";
// import Hero from "./components/Hero";
// import { Product } from "@/models/Product";
// import Products from "./components/Products";
// import Collection from "./components/Collection";

// export default function Home({ featuredProduct, newProducts, collectionProduct1,featuredProduct2, allProducts }) {
//   return (
//     <main
//       className={`min-h-screen p-4 bg-background `}
//     >

//       <Hero product={[featuredProduct,featuredProduct2]} />

//       <hr class="my-1 h-px border-0 bg-gray-300" />

//       <Products products={newProducts} />
//       <hr class="my-1 h-px border-0 bg-gray-300" />
//       <Collection product={collectionProduct1} />
//     </main>
//   )
// }

// export async function getServerSideProps() {
//   await mongooseConnect();
//   const featuredId = '6686f669336155b827c0c58f';
//   const featuredId2 = '6686f759336155b827c0c59e';

//   const collectionId = '668157d89ef4ff2fca3ce4f1';

//   const featuredProduct = await Product.findById(featuredId);
//   const featuredProduct2 = await Product.findById(featuredId2);

//   const collectionProduct1 = await Product.findById(collectionId);
//   const newProducts = await Product.find({}, null, {sort: {'_id': 1}, limit: 5})
//   const allProducts = await Product.find({}, null, {sort: {'_id': 1}})

//   return {
//     props: {
//       featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
//       collectionProduct1: JSON.parse(JSON.stringify(collectionProduct1)),
//       newProducts: JSON.parse(JSON.stringify(newProducts)),
//       allProducts: JSON.parse(JSON.stringify(allProducts)),
//     }
//   }
// }

import { mongooseConnect } from "@/lib/mongoose";
import Hero from "./components/Hero";
import { Product } from "@/models/Product";
import Products from "./components/Products";
import Collection from "./components/Collection";
import { useRouter } from "next/router.js";
// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";




export default function Home({ featuredProducts, newProducts, collectionProduct1, allProducts }) {
  // const {locale,locales,push}= useRouter()
  // const handleClick= l =>() =>{}

  return ( 
   
 
    
    <main className={`min-h-screen p-4 bg-background`}>
      <Hero product={featuredProducts} />
      <hr className="my-1 h-px border-0 bg-gray-300" />
      <Products products={newProducts} />
      <hr className="my-1 h-px border-0 bg-gray-300" />
      <Collection product={collectionProduct1} />
    </main>
  );
}

export async function getServerSideProps({locale}) {
  await mongooseConnect();
  const featuredId = '6686f830336155b827c0c5ab';
  const featuredId2 = '668700b8336155b827c0c623';
  const collectionId = '668157d89ef4ff2fca3ce4f1';

  const featuredProduct1 = await Product.findById(featuredId);
  const featuredProduct2 = await Product.findById(featuredId2);
  const collectionProduct1 = await Product.findById(collectionId);
  const newProducts = await Product.find({}, null, {sort: {'_id': 1}, limit: 5});
  const allProducts = await Product.find({}, null, {sort: {'_id': 1}});
  return {
    props: {
      featuredProducts: JSON.parse(JSON.stringify([featuredProduct1, featuredProduct2])),
      collectionProduct1: JSON.parse(JSON.stringify(collectionProduct1)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      allProducts: JSON.parse(JSON.stringify(allProducts)),
      ...(await serverSideTranslations(locale, ['common'])),
      

    },
  };
}




