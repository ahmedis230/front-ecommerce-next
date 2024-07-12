

import Link from "next/link";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CartContext } from "../../lib/CartContext.js";

import { useContext, useState } from "react";
import { translate }from '../../Utils/LanguageUtils.js';
import { useRouter } from "next/router.js";
import Image from 'next/image';
import LanguageContext from "../../context/_LanguageContext.js";



export default function Hero({ product }) {
  const router = useRouter();
  const {  changeLanguage } = useContext(LanguageContext);
  const { language } = useContext(LanguageContext)

  const { addProduct } = useContext(CartContext);

  function addItemToCart() {
    addProduct(product[0]._id);
  }

  if (product && product.length > 0) {
    return (
      <div className="relative overflow-hidden bg-background my-14 md:my-10">
        <div className="lg:py-40 min-h-[650px]">
          <div className="relative mx-auto sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-xl text-start">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl lg:hidden max-md:mb-6 font-bold tracking-tight text-primary">
                At <span className="text-accent">50%</span> Off
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-text">
                {product[0].title}
              </h1>
              <p className="mt-4 line-clamp-3 text-lg sm:text-xl lg:text-2xl text-gray-500">
                {product[0].description}
              </p>

              <div className="mt-10 flex flex-col max-sm:items-center max-sm:justify-center">
                <div className="lg:hidden relative ">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform rotate-3 translate-x-4 hover:-rotate-6 hover:translate-x-8 transition-transform duration-300 ease-in-out">
                      <Image
                      width={800} 
                      height={600}
                      src={product[0].images[0]} alt="" className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform -rotate-2 translate-x-2 hover:rotate-4 hover:translate-x-4 transition-transform duration-300 ease-in-out">
                      <Image
                      width={800} 
                      height={600}
                      src={product[0].images[1]} alt="" className="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center max-sm:justify-center max-sm:mt-6">
                  <button className="mt-6 inline-block rounded-md border border-transparent bg-primary px-6 py-3 text-center font-medium text-white hover:text-accent" onClick={addItemToCart}>
                  {translate('Add_tocart', language)}
                  </button>
                  <Link href="/products" className="mt-6 inline-block rounded-md  bg-transparent border border-accent px-6 py-3 text-center font-medium text-accent hover:text-primary hover:border-primary">
                  {translate('all_products', language)}
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform rotate-3 translate-x-4 hover:-rotate-6 hover:translate-x-8 transition-transform duration-300 ease-in-out">
                      <Image
                       src={product[1].images[0]}
                        alt="any" 
                      width={800} 
                      height={600}
                       className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform -rotate-2 translate-x-2 hover:rotate-4 hover:translate-x-4 transition-transform duration-300 ease-in-out">
                      <Image 
                      width={800} 
                      height={600}
                      src={product[1].images[1]} alt="any" className="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform rotate-1 translate-x-3 hover:-rotate-2 hover:translate-x-4 transition-transform duration-300 ease-in-out">
                      <Image 
                      width={800} 
                      height={600}
                      src={product[0].images[0]} alt="any" className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform -rotate-4 translate-x-2 hover:rotate-8 hover:translate-x-3 transition-transform duration-300 ease-in-out">
                      <Image
                      width={800} 
                      height={600}
                      src={product[0].images[1]} alt="any" className="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}