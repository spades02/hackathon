import Image from 'next/image'
import logo from '../public/Logo.webp'
import {SiFacebook, SiLinkedin, SiTwitter} from 'react-icons/si'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='divide-y mt-64 mx-24'>
    <div className="flex flex-row m-14 gap-24">
        <div className="flex flex-col gap-12 w-1/3">
            <Image alt ="logo" src={logo}/>
            <p className='font-light font-serif text-lg text-gray-500'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
            <div className='flex flex-row gap-4'>
                <button className='p-4 rounded-xl shadow-lg bg-gray-200'><SiTwitter/></button>
                <button className='p-4 rounded-xl shadow-lg bg-gray-200'><SiFacebook/></button>
                <button className='p-4 rounded-xl shadow-lg bg-gray-200'><SiLinkedin/></button>
            </div>
        </div>
    <div className='flex flex-col gap-5'>
        <h1 className='font-bold text-gray-500 text-2xl'>Company</h1>
        <Link className='font-light text-lg text-gray-500' href="/">About</Link>
        <Link className='font-light text-lg text-gray-500' href="/">Terms of Use</Link>
        <Link className='font-light text-lg text-gray-500' href="/">Privacy Policy</Link>
        <Link className='font-light text-lg text-gray-500' href="/">How it works</Link>
        <Link className='font-light text-lg text-gray-500' href="/">Contact Us</Link>
    </div>
    <div className='flex flex-col gap-5'>
        <h1 className='font-bold text-gray-500 text-2xl'>Support</h1>
        <Link className='font-light text-lg text-gray-500' href="/">Support Center</Link>
        <Link className='font-light text-lg text-gray-500' href="/">24h Service</Link>
        <Link className='font-light text-lg text-gray-500' href="/">Quick Chat</Link>

    </div>
    <div className='flex flex-col gap-5'>
        <h1 className='font-bold text-gray-500 text-2xl'>Contact</h1>
        <Link className='font-light text-lg text-gray-500' href="/">Whatsapp</Link>
        <Link className='font-light text-lg text-gray-500' href="/">Support 24h</Link>
    </div>
        
    </div>
    <div className='flex flex-row justify-center gap-52 py-8'>
        <p>Copyright © 2022 Dine Market</p>
        <p className='flex flex-row'>Design by. <p className='font-bold'>Weird Design Studio</p></p>
        <p className='flex flex-row'>Code by. <p className='font-bold'> spades02 on github</p></p>
    </div>
    </div>
  )
}
