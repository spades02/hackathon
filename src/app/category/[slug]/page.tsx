import { Products } from "@/src/utils/mock"
import ProductCard from "@/components/ProductCard"
import { StaticImageData } from "next/image"

const getProductsByCategory = (category:string) =>{
return Products.filter((product) => product.category === category);
};
export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductsByCategory(params.slug)
    return <div className="flex flex-wrap w-full justify-evenly">
        {result.length > 0 ? result.map((product) => (
                <ProductCard
                key={product.id}
                title={product.name}
                category={product.category}
                price={product.price}
                img={product.image as StaticImageData}
                id={product.id}
              />
            )) :(<p>No Products Found</p>)}
            
        </div>
}