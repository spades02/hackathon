import { Product } from "./types";
import p1 from '../../public/p1.png'
import p2 from "../../public/p2.png"
import p3 from "../../public/p3.png"
import p4 from "../../public/p4.png"
import p5 from "../../public/p5.png"
import p6 from "../../public/p6.png"
import p7 from "../../public/p7.png"
import p8 from "../../public/p8.png"
import p9 from "../../public/p9.png"
import p10 from "../../public/p10.png"
import p11 from "../../public/p11.png"

export const Products:Product[]= [
{
    id:1,
    name:'Brushed Raglan Sweatshirt',
    price:100,
    type:'Sweater',
    category:'female',
    image:p1,
},
{
    id:2,
    name:'Cameryn Sash Tie Dress',
    price:200,
    type:'Dress',
    category:'female',
    image:p2,
},
{
    id:3,
    name:'Flex Sweatshirt',
    price:1000,
    type:'Sweater',
    category:'male',
    image:p3,
},
{
    id:4,
    name:'Flex Sweatpants',
    price:250,
    category:'female',
    type:'pants',
    image:p4,
},
{
    id:5,
    name:'Pink Fleece Sweatpants',
    price:250,
    type:'pants',
    category:'male',
    image:p5,
},
{
    id:6,
    name:'Lite Sweatpants',
    price:1000,
    type:'pants',
    category:'kids',
    image:p6,
},
{
    id:7,
    name:'Imperial Alpaca Hoodie',
    price:250,
    type: 'Jackets',
    category:'male',
    image:p7,
},
{
    id:8,
    name:'Flex Push Button Bomber',
    price:250,
    type:'Jackets',
    category:'male',
    image:p8,
},
{
    id:9,
    name:'Muscle Tank',
    price:250,
    type:'T Shirts',
    category:'male',
    image:p9,
},
{
    id:10,
    name:'Brushed Bomber',
    price:250,
    type:'Jackets',
    category:'male',
    image:p10,
},
{
    id:11,
    name:'Raglan Sweatshirt',
    price:250,
    type:'Sweater',
    category:'male',
    image:p11,
}
]