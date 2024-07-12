

// import '@/styles/globals.css';
// import { Poppins } from 'next/font/google';
// import Header from './components/Header';
// import { CartContextProvider } from '../lib/CartContext';
// import { SessionProvider } from 'next-auth/react';
// import { Toaster } from 'react-hot-toast';
// import { appWithTranslation } from 'next-i18next';
// // import '../i18n.js'; // Import the i18n configuration
// // import createI18nInstance from '../i18n.js'; 
// import { serverSideTranslations } from "next-i18next/serverSideTranslations.js";

// const inter = Poppins({
//   subsets: ['latin'],
//   weight: '500'
// });

// function App({ Component, pageProps: { session, ...pageProps } }) {
//   // createI18nInstance();
//   return (
//     <SessionProvider session={session}>
//       <CartContextProvider>
//         <main className={`${inter.className} min-h-screen max-w-screen-2xl mx-auto bg-background sm:px-6`}>
//           <Header />
//           <Toaster position='top-center' />
//           <Component {...pageProps} className="sm:mt-36" />
//         </main>
//       </CartContextProvider>
//     </SessionProvider>
//   );
// }

// export default appWithTranslation(App);

// pages/_app.js
import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import Header from './components/Header';
import { CartContextProvider } from '../lib/CartContext';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import { appWithTranslation } from 'next-i18next';
import {useRouter} from 'next/router'
import { LanguageProvider  } from '../context/_LanguageContext.js';

// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; // Import serverSideTranslations

const inter = Poppins({
  subsets: ['latin'],
  weight: '500'
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter()

  return (
    <SessionProvider session={session}>
      <CartContextProvider>

          <LanguageProvider >
        <main className={`${inter.className} min-h-screen max-w-screen-2xl mx-auto bg-background sm:px-6`}>
          <Header />
          <Toaster position='top-center' />

          <Component {...pageProps} className="sm:mt-36" />


        </main>
          </LanguageProvider >
      </CartContextProvider>
    </SessionProvider>
  );
}
export default appWithTranslation(MyApp);



