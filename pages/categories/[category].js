


import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Link from "next/link";
import Image from 'next/image';
import { CartContext } from '../../lib/CartContext.js';
import toast from "react-hot-toast";
import { translate }from '../../Utils/LanguageUtils.js';
import LanguageContext from '../../context/_LanguageContext.js';
// import { Categories } from "@/models/Product";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ayhaga, setAyhaga] = useState([]);
  const { addProduct } = useContext(CartContext);
  const { language } = useContext(LanguageContext)


  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // function addItemToCart() {
  //   addProduct(product[0]._id);
  // }

  // useEffect(() => {
  //   if (category) {
  //     // Fetch products based on the category
  //       axios.get(`/api/category?category=${category}`)
  //       .then(response => {
  //         setProducts(response.data);
  //         setLoading(false);

  //         // Check if products array has items before accessing _id
  //         if (response.data.length > 0) {
  //           axios.get(`/api/products?category=${response.data[0]._id}`)
  //             .then(response => {
  //               setAyhaga(response.data);
  //             })
  //             .catch(error => {
  //               console.error("Error fetching products:", error);
  //               setLoading(false);
  //             });
  //         }
  //       })
  //       .catch(error => {
  //         console.error("Error fetching products:", error);
  //         setLoading(false);
  //       });
  //   }
  // }, [category]);


  useEffect(() => {
    const fetchProducts = async () => {
      if (category) {
        try {
          // Fetch categories based on the category
          const categoryResponse = await axios.get(`/api/category?category=${category}`);
          setProducts(categoryResponse.data);
          setLoading(false);

          // Check if products array has items before accessing _id
          if (categoryResponse.data.length > 0) {
            const productResponse = await axios.get(`/api/products?category=${categoryResponse.data[0]._id}`);
            setAyhaga(productResponse.data);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, [category]);


  // Move console.log(products[0]._id) inside useEffect to avoid accessing undefined
  useEffect(() => {
    if (products.length > 0) {
      console.log(products[0]._id);
    }
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="my-3">Products in {category} :</h1>
      <div className="grid grid-cols-2 gap-x-3 md:gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 xl:gap-x-8 px-2">
        {ayhaga.map((product) => (
          <div key={product._id}>
            <div className="group block overflow-hidden border border-accent rounded-xl border-opacity-10">
              <div className="">
                <div className="relative md:h-[300px] h-[200px]">
                  <Image
                    src={product.images[0]}
                    alt=""
                    className="absolute inset-0 opacity-100 group-hover:opacity-0"
                    width={800} // specify the width
                    height={600} // specify the height
                  />
                  <Image
                    src={product.images[1]}
                    alt=""
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    width={800} // specify the width
                    height={600} // specify the height
                  />
                </div>

                <div className="relative p-3 border-t">
                  <Link href={"/products/" + product._id}>
                    <h3 className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4 truncate">
                      {product.title}
                    </h3>
                  </Link>

                  <div className="mt-1.5 flex flex-col items-center justify-between text-text">
                    <p className="tracking-wide text-primary text-sm md:text-md">
                      Euro. {formatPrice(product.price)}
                    </p>

                    <div className="col-span-12 text-center w-full mt-3">
                      <button
                        onClick={() => {
                          addProduct(product._id);
                          toast.success("Item added to cart!");
                        }}
                        className="disabled block rounded bg-secondary px-5 py-3 text-md text-text w-full transition hover:bg-purple-300"
                      >
                        {translate('Add_tocart', language)}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// export async function getServerSideProps() {
//   await mongooseConnect();
//   const allProducts = await Categories.find({}, null, { sort: { _id: 1 } });

//   return {
//     props: {
//       allProducts: JSON.parse(JSON.stringify(allProducts)),
//     },
//   };
// }


// import { useRouter } from 'next/router';
// import { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import Link from "next/link";
// import Image from 'next/image';
// import { CartContext } from '../../lib/CartContext.js';
// import toast from "react-hot-toast";
// import { translate }from '../../Utils/LanguageUtils.js';
// import LanguageContext from '../../context/_LanguageContext.js';

// export default function CategoryPage({product}) {
//   const router = useRouter();
//   const { category } = router.query;
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [ayhaga, setAyhaga] = useState([]);
//   const { addProduct } = useContext(CartContext);
//   const { language } = useContext(LanguageContext)

//   const formatPrice = (price) => {
//     return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   };

//   useEffect(() => {
//     if (category) {
//       axios.get(`/api/category?category=${category}`)
//         .then(response => {
//           setProducts(response.data);
//           setLoading(false);

//           if (response.data.length > 0) {
//             axios.get(`/api/products?category=${response.data[0]._id}`)
//               .then(response => {
//                 setAyhaga(response.data);
//               })
//               .catch(error => {
//                 console.error("Error fetching products:", error);
//                 setLoading(false);
//               });
//           }
//         })
//         .catch(error => {
//           console.error("Error fetching categories:", error);
//           setLoading(false);
//         });
//     }
//   }, [category]);

//   useEffect(() => {
//     if (products.length > 0) {
//       console.log(products[0]._id);
//     }
//   }, [products]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1 className="my-3">Products in {category} :</h1>
//       <div className="grid grid-cols-2 gap-x-3 md:gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 xl:gap-x-8 px-2">
//         {ayhaga.map((product) => (
//           <div key={product._id}>
//             <div className="group block overflow-hidden border border-accent rounded-xl border-opacity-10">
//               <div className="">
//                 <div className="relative md:h-[300px] h-[200px]">
//                   <Image
//                     src={product.images[0]}
//                     alt=""
//                     className="absolute inset-0 opacity-100 group-hover:opacity-0"
//                     width={800} // specify the width
//                     height={600} // specify the height
//                   />
//                   <Image
//                     src={product.images[1]}
//                     alt=""
//                     className="absolute inset-0 opacity-0 group-hover:opacity-100"
//                     width={800} // specify the width
//                     height={600} // specify the height
//                   />
//                 </div>

//                 <div className="relative p-3 border-t">
//                   <Link href={"/products/" + product._id}>
//                     <h3 className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4 truncate">
//                       {product.title}
//                     </h3>
//                   </Link>

//                   <div className="mt-1.5 flex flex-col items-center justify-between text-text">
//                     <p className="tracking-wide text-primary text-sm md:text-md">
//                       ksh. {formatPrice(product.price)}
//                     </p>

//                     <div className="col-span-12 text-center w-full mt-3">
//                       <button
//                         onClick={() => {
//                           addProduct(product._id);
//                           toast.success("Item added to cart!");
//                         }}
//                         className="disabled block rounded bg-secondary px-5 py-3 text-md text-text w-full transition hover:bg-purple-300"
//                       >
//                         {translate('Add_tocart', language)}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

