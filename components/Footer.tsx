import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constant";

const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
        <p className='text-base text-gray-700'>
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 CarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;


// import Image from "next/image"
// import { footerLinks } from "@/constant"
// import NextLink from "next/link"
// import Link from "next/link"

// const Footer = () => {
//   return (
//     <footer className=" flex flex-col text-black-100 mt-5 border-t border-gray-100 ">
//       <div className=" flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
//         <div className=" flex flex-col justify-start items-start gap-6">
//           <Image 
//           src={'/logo.svg'}
//           width={118}
//           height={18}
//           alt="logo"
//           className=" object-contain"
//           />
//           <p className=" text-base text-gray-700"> Car hub 2023 <br /> All rights reserved &copy;</p>
//         </div>

//         <div className=" footer__links">
//           {footerLinks.map((Link) => (
//             <div key={Link.title} className=" footer__links">
//               <h3 className=" font-bold text-black">{Link.title}</h3>
//               {Link.links.map((item) => (
//                 <NextLink key={item.title} href={item.url} className=" text-gray-500">{item.title}</NextLink>
//               ))}
//             </div>
//           ))}
//         </div>

//         <div className=" flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
//           <p>@2023 carHub. All Rights Resevered</p>
//           <div className="footer__copyrights-link">
//             <Link href={"/"} className=" text-gray-500">Privacy Policy</Link>
//             <Link href={"/"} className=" text-gray-500">Term of use</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer