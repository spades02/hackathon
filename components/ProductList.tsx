import { StaticImageData } from "next/image";
import ProductCard from "./ProductCard";
import { Products } from "@/src/utils/mock";

const ProductList = () =>{
    const productChunks = Products.slice(0, 3)
    return(
        <div className="flex justify-center">
            {productChunks.map((product) => (
                <ProductCard key={product.id} title={product.name} type={product.type} category={product.category} price={product.price} id={product.id} img={product.image as StaticImageData}/>
            ))}
        </div>
    )
}
export default ProductList