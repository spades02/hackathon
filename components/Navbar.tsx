import { Search, ShoppingCart } from 'lucide-react'
import Image from "next/image";
import logo from "../public/Logo.webp"
import Link from "next/link";
import RxHamburgerMenu from 'react-icons'


export default function navbar() {
  return (
    <div className="m-10 flex flex-row gap-16 mx-24">
      <Link href="/">
        <Image alt = "logo" height={25} src={logo} className='p-2 m-2' />
      </Link>  
        <div className='mt-4 flex flex-row gap-16   '>
        <Link className={"font-medium"} href = "category/female" > Female</Link>
        <Link className={"font-medium"} href = "category/male" > Male</Link>
        <Link className={"font-medium"} href = "category/kids" > Kids</Link>
        <Link className={"font-medium"} href = "/products" > All Products</Link>
        </div>
        <div className='flex border-2 border-gray-100 shadow-sm rounded-md my-3'>
          <Search className='bg-white rounded-l pt-1'/>
          <input type="text" placeholder='what you looking for?' className='h-auto mx-1 text-sm w-80' />
        </div>
        <button className="rounded-full hover:animate-[zoom-in] bg-gray-300 p-2 m-1.5" >
        <ShoppingCart className="" />
        <span className="ml-2 mt-2 absolute top-6 right-65 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
          0
        </span>
      </button>

    </div>
  )
}
