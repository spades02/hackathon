import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard(props:{
  title:string;
  price:number;
  category:string;
  img:StaticImageData;
  id:number;
  type:string;
}) {
  return (
    <Link href={`products/${props.id}`}>
    <div>
        <Image className='h-80 w-80' alt="Products" src={props.img} />
        <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
        <p className='font-bold text-lg mt-3'>${props.price}</p>
    </div>
    </Link>
  )
}
