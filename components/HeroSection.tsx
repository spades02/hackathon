import {FaShoppingCart} from 'react-icons/fa'
import hero from '../public/hero.webp'
import featured1 from '../public/Featured1.webp'
import featured2 from '../public/Featured2.webp'
import featured3 from '../public/Featured3.webp'
import featured4 from '../public/Featured4.webp'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 m-14">
      <div className="flex flex-col gap-10 items-start flex-1 mx-24">
        <button className="bg-slate-200 rounded-md p-2 font-semibold text-blue-700 px-6" disabled>Sale 70%</button>
        <h1 className="lg:pr-24 scroll-m-20 text-4xl font-bold lg:text-6xl">
            An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 lg:pr-72 text-lg font-light">
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>
        <button className="flex flex-row bg-stone-700 text-white border-gray-900 border-2 shadow-lg text-center p-4 items-center pl-4 gap-4"><FaShoppingCart />Start <br/> Shopping</button>
        <div className='grid grid-cols-2 grid-rows-2 lg:flex lg:flex-row gap-4'>
          <Image alt = "featured1" src={featured1} height={100} width={100}/>
          <Image alt = "featured2" src={featured2} height={100} width={100}/>
          <Image alt = "featured3" src={featured3} height={100} width={100}/>
          <Image alt = "featured4" src={featured4} height={100} width={100}/>
        </div>
      </div>
      <div className='rounded-full bg-scroll flex-1 bg-amber-100 mb-24'>
          <Image className='h-full w-full' src={hero} alt = "hero"/>
      </div>
    </div>
  )
}
