import { Products } from "@/src/utils/mock"
import ProductCard from "@/components/ProductCard"
import Image, { StaticImageData } from "next/image"

const getProductDetails = (id:number | string) =>{
return Products.filter((product) => product.id == id);
};
export default function Page({ params }: { params: { id: string } }) {
    const result = getProductDetails(params.id)
    return (
    <div className="flex flex-wrap w-full justify-evenly">
        {result.map((product) => (
            <div key={product.id} className="flex justify-between">
                <div>
                    <Image className="aspect-[1/1]" src = {product.image} alt = {product.name} />
                </div>
                <div>
                    <h4 className="scroll-m-20 text-3xl font-normal tracking-tight">
                        {product.name}
                    </h4>
                    <p className="scroll-m-20 text-3xl font-semibold text-stone-700 tracking-tight lg:text-3xl">
                      {product.type}
                    </p>
                </div>

            </div>
        ))}
    </div>
    )
}