import ProductCard from "@/components/ProductCard"
import { Products } from "@/src/utils/mock"
import { StaticImageData } from "next/image"

const AllProducts = () =>{
    return(
    <div className="m-6 grid grid-cols-4">
        <div className="">
            {Products.map((product) => (
                <ProductCard
                key={product.id}
                title={product.name}
                category={product.category}
                price={product.price}
                img={product.image as StaticImageData}
                id={product.id}
                type={product.type}
              />
            ))}
        </div>
    </div>
    )
}
export default AllProducts