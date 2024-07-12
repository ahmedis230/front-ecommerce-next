



import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CartContext } from "../../lib/CartContext.js";

import { useContext, useState } from "react";
import { translate }from '../../Utils/LanguageUtils.js';
import Image from 'next/image';
import LanguageContext from "../../context/_LanguageContext.js";



const Header = ({locale}) => {

    
        
        
        const router = useRouter();
    const {  changeLanguage } = useContext(LanguageContext);
    const { language } = useContext(LanguageContext)

    const { pathname } = router;
    const { cartProducts } = useContext(CartContext);
    const { data: session } = useSession();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(pathname);
    const [useGoogleTranslate, setUseGoogleTranslate] = useState(true); // State to toggle between Google Translate and custom switcher
    
    const active = 'text-primary transition hover:text-secondary font-bold';
    const inActive = 'text-gray-500 transition hover:text-gray-500/75 font-medium';

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setActiveLink('/categories');
    };

    const toggleMobileDropdown = () => {
        setIsMobileDropdownOpen(!isMobileDropdownOpen);
        setActiveLink('/categories');
    };
    const closeMobileDropdown = () => {
        setIsMobileDropdownOpen(false); // Function to close mobile dropdown
        setIsMobileNavOpen(false); // Close mobile nav menu

    };

    return (
        <>
      

            <header className="bg-white border-b border-primary border-opacity-40 sticky top-0 z-40">
                <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-3  lg:px-8">
                    <Link className="flex items-center gap-1 text-primary" href="/">
                        <span className="sr-only">{translate('home', language)}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                        </svg>
                        / {translate('my_shop', language)}
                    </Link>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link className={pathname === '/' ? active : inActive} href="/" onClick={() => setActiveLink('/')}> {translate('home', language)} </Link>
                                </li>
                                <li>
                                    <Link className={pathname === '/products' ? active : inActive} href="/products" onClick={() => setActiveLink('/products')}> {translate('all_products', language)}</Link>
                                </li>
                                <li className="relative">
                                    <button
                                        className={activeLink === '/categories' ? active : inActive}
                                        onClick={toggleDropdown}
                                    >
                                        {translate('categories', language)}
                                    </button>

                                  


{isDropdownOpen && (
  <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-64 overflow-y-auto">
    <Link href="/categories/Massage Beds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/Massage Beds'); setIsDropdownOpen(false); }}>
    {translate('massage_beds', language)}
    </Link>
    <Link href="/categories/spa beds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/spa beds'); setIsDropdownOpen(false); }}>
    {translate('spa_beds', language)}
    </Link>
    <Link href="/categories/Rehabilitation Tables" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/Rehabilitation Tables'); setIsDropdownOpen(false); }}>
    {translate('rehabilitation_tables', language)}
    </Link>
    <Link href="/categories/Medical Chairs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/Medical Chairs'); setIsDropdownOpen(false); }}>
    {translate('medical_chairs', language)}
    </Link>
    <Link href="/categories/Hairdressing Furniture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/Hairdressing Furniture'); setIsDropdownOpen(false); }}>
    {translate('hairdressing_furniture', language)}
    </Link>
    <Link href="/categories/Manicure Tables" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/Manicure Tables'); setIsDropdownOpen(false); }}>
    {translate('manicure_tables', language)}
    </Link>
    <Link href="/categories/Lamps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/Lamps'); setIsDropdownOpen(false); }}>
    {translate('lamps', language)}
    </Link>
    <Link href="/categories/Beauty Equipments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/Beauty Equipments'); setIsDropdownOpen(false); }}>
    {translate('beauty_equipments', language)}
    </Link>
    <Link href="/categories/Sterilizers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/Sterilizers'); setIsDropdownOpen(false); }}>
    {translate('sterilizers', language)}
    </Link>
    <Link href="/categories/Stools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/Stools'); setIsDropdownOpen(false); }}>
    {translate('stools', language)}
    </Link>
    <Link href="/categories/Physiotherapy Tables" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/Physiotherapy Tables'); setIsDropdownOpen(false); }}>
    {translate('physiotherapy_tables', language)}
    </Link>
    <Link href="/categories/WAITING ROOM CHAIRS" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/WAITING ROOM CHAIRS'); setIsDropdownOpen(false); }}>
    {translate('waiting_room_chairs', language)}
    </Link>
    <Link href="/categories/DRESSING TABLES" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/DRESSING TABLES'); setIsDropdownOpen(false); }}>
    {translate('dressing_tables', language)}
    </Link>
    <Link href="/categories/BACKWASHES" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/BACKWASHES'); setIsDropdownOpen(false); }}>
    {translate('backwashes', language)}
    </Link>
    <Link href="/categories/Beauty Chairs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/Beauty Chairs'); setIsDropdownOpen(false); }}>
    {translate('beauty_chairs', language)}
    </Link>
    <Link href="/categories/SALON CHAIRS" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/SALON CHAIRS'); setIsDropdownOpen(false); }}>
    {translate('salon_chairs', language)}
    </Link>
    <Link href="/categories/ACCESSORIES" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/ACCESSORIES'); setIsDropdownOpen(false); }}>
    {translate('accessories', language)}
    </Link>
    
    <Link href="/categories/RECEPTION DESKS" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { setActiveLink('/categories/RECEPTION DESKS'); setIsDropdownOpen(false); }}>
    {translate('reception_desks', language)}
    </Link>
  </div>
)}

                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">

                            <div className="flex lg-block sm:gap-4">
                                {session ? (
                                    <div className="sm:flex sm:gap-2 border-r border-primary pr-4">
                                        <div className="h-9 w-9">
                                            <Image className="h-full w-full rounded-full object-cover object-center"
                                             src={session.user.image}
                                              alt={session.user.email}
                                              width={800} // specify the width
                                              height={600} // specify the height
                                              
                                              />
                                        </div>
                                    </div>
                                ) : (

                                    <Link
                                        href="/"
                                        className={`inline-block items-center gap-2 rounded-md px-4 py-2 text-md text-accent hover:text-gray-700 focus:relative ${pathname === ('/products') ? 'text-primary' : ""}`}
                                    >
                                        {translate('account', language)}
                                    </Link>
                                )}

                                <Link href="/cart" className="group mx-1 flex items-center p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    <span className="ml-2 text-md text-primary font-bold group-hover:text-text">{cartProducts.length}</span>
                                </Link>
                                





                                              <select
  style={{
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '15px',
    padding: '3px',
    margin: '0',
    fontFamily: 'Public Sans, sans-serif',
    fontSize: '1.2rem'
  }}
  onChange={(e) => changeLanguage(e.target.value)}
>
  <option value="en">en</option>
  <option value="ar">ar</option>
  <option value="sv">sv</option>
                                              </select>
                                              


                                
                            </div>
                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                                onClick={toggleMobileNav}
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

 {/* <div className="container mx-5 px-4 flex-end">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-4">
                        {session ? (
                            <div className="flex items-center gap-2 border-r border-primary pr-4">
                                <div className="h-9 w-9">
                                    <Image
                                        className="h-full w-full rounded-full object-cover object-center"
                                        src={session.user.image}
                                        alt={session.user.email}
                                        width={36}
                                        height={36}
                                    />
                                </div>
                            </div>
                        ) : (
                            <Link
                                href="/"
                                className={`inline-block items-center gap-2 rounded-md px-4 py-2 text-md text-accent hover:text-gray-700 focus:relative ${pathname === '/products' ? 'text-primary' : ''}`}
                            >
                                {translate('account', language)}
                            </Link>
                        )}

                        <Link href="/cart" className="group mx-1 flex items-center p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                            </svg>
                            <span className="ml-2 text-md text-primary font-bold group-hover:text-text">{cartProducts.length}</span>
                        </Link>

                        <select
                            value={locale}
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="block bg-white border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                            style={{
                                backgroundColor: '#fff',
                                border: '1px solid #ccc',
                                borderRadius: '15px',
                                padding: '3px',
                                margin: '0',
                                fontFamily: 'Public Sans, sans-serif',
                                fontSize: '1.2rem',
                            }}
                        >
                            <option value="en">en</option>
                            <option value="ar">ar</option>
                            <option value="sv">sv</option>
                        </select>
                    </div>
                    
                </div>
            </div> */}



                    </div>
                </div>
                {isMobileNavOpen && (
                    <div className="md:hidden absolute top-16 right-0 bg-white border border-zinc-200 rounded shadow-lg p-6 text-lg">
                        <nav aria-label="Global">
                            <ul className="flex flex-col items-start gap-6 text-md">
                                <li>
                                    <Link className={pathname === '/' ? active : inActive} href="/" onClick={() => { setIsMobileNavOpen(false); setActiveLink('/'); }}> {translate('home', language)} </Link>
                                </li>
                                <li>
                                    <Link className={pathname === '/products' ? active : inActive} href="/products" onClick={() => { setIsMobileNavOpen(false); setActiveLink('/products'); }}> {translate('all_products', language)} </Link>
                                </li>
                                <li className="relative">
                                    <button
                                        className={activeLink === '/categories' ? active : inActive}
                                        onClick={toggleMobileDropdown}
                                    >
                                        {translate('categories', language)}
                                    </button>
                                    {isMobileDropdownOpen && (
                                        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-64 overflow-y-auto">
                                        <Link href="/categories/Massage Beds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => {closeMobileDropdown(); setActiveLink('/categories/Massage Beds'); setIsDropdownOpen(false); }}>
                                        {translate('massage_beds', language)}
                                        </Link>
                                        <Link href="/categories/spa beds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/spa beds'); setIsDropdownOpen(false); }}>
                                        {translate('spa_beds', language)}
                                        </Link>
                                        <Link href="/categories/Rehabilitation Tables" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/Rehabilitation Tables'); setIsDropdownOpen(false); }}>
                                        {translate('rehabilitation_tables', language)}
                                        </Link>
                                        <Link href="/categories/Medical Chairs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/Medical Chairs'); setIsDropdownOpen(false); }}>
                                        {translate('medical_chairs', language)}
                                        </Link>
                                        <Link href="/categories/Hairdressing Furniture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/Hairdressing Furniture'); setIsDropdownOpen(false); }}>
                                        {translate('hairdressing_furniture', language)}
                                        </Link>
                                        <Link href="/categories/Manicure Tables" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/Manicure Tables'); setIsDropdownOpen(false); }}>
                                        {translate('manicure_tables', language)}
                                        </Link>
                                        <Link href="/categories/Lamps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/Lamps'); setIsDropdownOpen(false); }}>
                                        {translate('lamps', language)}
                                        </Link>
                                        <Link href="/categories/Beauty Equipments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/Beauty Equipments'); setIsDropdownOpen(false); }}>
                                        {translate('beauty_equipments', language)}
                                        </Link>
                                        <Link href="/categories/Sterilizers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/Sterilizers'); setIsDropdownOpen(false); }}>
                                        {translate('sterilizers', language)}
                                        </Link>
                                        <Link href="/categories/Stools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/Stools'); setIsDropdownOpen(false); }}>
                                        {translate('stools', language)}
                                        </Link>
                                        <Link href="/categories/Physiotherapy Tables" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/Physiotherapy Tables'); setIsDropdownOpen(false); }}>
                                        {translate('physiotherapy_tables', language)}
                                        </Link>
                                        <Link href="/categories/WAITING ROOM CHAIRS" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/WAITING ROOM CHAIRS'); setIsDropdownOpen(false); }}>
                                        {translate('waiting_room_chairs', language)}
                                        </Link>
                                        <Link href="/categories/DRESSING TABLES" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/DRESSING TABLES'); setIsDropdownOpen(false); }}>
                                        {translate('dressing_tables', language)}
                                        </Link>
                                        <Link href="/categories/BACKWASHES" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/BACKWASHES'); setIsDropdownOpen(false); }}>
                                        {translate('backwashes', language)}
                                        </Link>
                                        <Link href="/categories/Beauty Chairs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/Beauty Chairs'); setIsDropdownOpen(false); }}>
                                        {translate('beauty_chairs', language)}
                                        </Link>
                                        <Link href="/categories/SALON CHAIRS" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/SALON CHAIRS'); setIsDropdownOpen(false); }}>
                                        {translate('salon_chairs', language)}
                                        </Link>
                                        <Link href="/categories/ACCESSORIES" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/ACCESSORIES'); setIsDropdownOpen(false); }}>
                                        {translate('accessories', language)}
                                        </Link>
                                        
                                        <Link href="/categories/RECEPTION DESKS" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { closeMobileDropdown(); setActiveLink('/categories/RECEPTION DESKS'); setIsDropdownOpen(false); }}>
                                        {translate('reception_desks', language)}
                                        </Link>
                                      </div>
                                    )}
                                </li>
                                <li>
                                    {session && (
                                        <button onClick={() => signOut()}>{translate('logout', language)}
</button>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </header>
        </>
    )
}



export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  }
    

export default Header











    















