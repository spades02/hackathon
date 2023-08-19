import Image from 'next/image'
import event1 from '../public/event1.webp'
import event2 from '../public/event2.webp'
import event3 from '../public/event3.webp'
import hoodie from '../public/p7.png'
import ProductList from './ProductList'

export default function Content() {
  return (
    <div className="flex flex-col gap-24 text-center m-14">
        <div className="flex flex-col gap-6">
            <h3 className="text-blue-700 font-semibold ">PROMOTIONS</h3>
            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">Our Promotion Events</h1>
        </div>
        <div className='flex flex-row gap-8 justify-center h-fixed w-full'>
        <div className='flex flex-col gap-4 w-4/3'>
            <Image className='bg-pink-200 bg-opacity-80 pl-40 ' height={450} width={450} src={event1} alt = "event1"/>
            <span className='scroll-m-20 text-3xl font-bold tracking-tighter absolute pt-10 pl-6 text-left'>GET UP TO <br/> 60%</span>
            <span className='scroll-m-20 text-lg font-light tracking-tighter absolute pt-28 pl-6 text-left'>For the summer<br/> season</span>
            <div className='bg-[#21130d] text-white pt-8 pb-8'>
                <p className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl m-6 pt-4'>
                GET 30% Off
                </p>
                <p className='scroll-m-20 text-md font-light tracking-tight m-2'>
                    USE PROMO CODE
                </p>
                <button disabled className='rounded-lg bg-[#7a716e] py-2 px-16 bg-opacity-50 tracking-[0.2em] antialiased'>DINEWEEKENDSALE</button>
            </div>
        </div>
        <div className='flex flex-row gap-4 w-4/3 '>
            <Image className='bg-[#00ff80] bg-opacity-30 pt-20' src={event2} alt = 'event 2'/>
            <div className='flex flex-col cols-2 gap-2 absolute ml-6 mt-6 text-left'>
                <p>Flex Sweatshirt</p>

                <div className='flex flex-row gap-2'>
                    <p className='line-through'>$100.00</p>
                    <p className='font-bold'>$75.00</p>
                </div>
            </div>
            <Image className='bg-pink-200 bg-opacity-80 pt-20' src={event3} alt = 'event 3'/>
            <div className='flex flex-col cols-2 gap-2 absolute ml-80 mt-6 text-right'>
                <p>Flex Push Button Bomber</p>

                <div className='flex flex-row gap-2'>
                    <p className='line-through'>$225.00</p>
                    <p className='font-bold'>$190.00</p>
                </div>
            </div>
        </div>
        </div>
        <div className="flex flex-col gap-6">
            <h3 className="text-blue-700 font-semibold ">PRODUCTS</h3>
            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">Check What We Have</h1>
        </div>
        <ProductList />
        <div className='ml-[50%]'>
            <h1 className="scroll-m-20 text-left text-4xl font-bold tracking-tight lg:text-5xl">
        Unique and <br/>Authentic Vintage Designer Jewellery
      </h1>
        </div>
        <div className='flex flex-row row-span-2 justify-between gap-12 content-center self-center mx-24'>
            <div className='relative flex-auto grid grid-rows-2 grid-flow-col gap-y-2 gap-x-4 text-left'>
                <div className='text-lg'>
                    <h1 className='font-semibold'>
                        Using Good Quality Materials
                    </h1>
                <p className='font-mono'>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                <div className='text-lg'>
                    <h1 className='font-semibold'>
                       100% Handmade Products
                    </h1>
                
                    <p className='font-mono'>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                    
                <div className='text-lg'>
                    <h1 className='font-semibold'>
                        Modern Fashion Design
                    </h1>
                
                    <p className='font-mono'>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                    
                <div className='text-lg'>
                    <h1 className='font-semibold'>
                        Discount for Bulk Orders
                    </h1>
                
                    <p className='font-mono'>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                    
                <h1 className="scroll-m-20 text-8xl absolute opacity-5 font-extrabold">
                    Different <br/>from <br/>others
                </h1>

            </div>
        <div className='flex gap-6'>
            <Image className='flex-auto pl-36 h-96' src={hoodie} alt='hoodie'/>
            <div className='flex flex-col w-[27%] justify-between'>
            <p className='text-justify font-mono'>
                This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
            </p>
            <button className="bg-black text-white border-gray-900 border-2 shadow-lg text-center p-4 items-center pl-4 gap-4">See All Products</button>
            </div>
            
        </div>
    </div>
    <div className='relative flex flex-col gap-8'>
        <h1 className='scroll-m-20 text-9xl absolute ml-64 opacity-5 font-extrabold'>Newsletter</h1>
        <h1 className='font-extrabold text-3xl'>
            Subscribe Our Newsletter
        </h1>
        <p>Get the latest information and promo offers directly</p>
    <div>
        <input className='border-2 m-4 pl-2 pr-24 py-2' type="text" placeholder='Input email address' />
        <button className="bg-black text-white font-bold border-gray-900 border-2 shadow-lg text-center items-center px-2 py-1">Get Started</button>
    </div>
    </div>
    </div>
  )
}
